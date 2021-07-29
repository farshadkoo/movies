import React, { useEffect, useState } from "react";
import { Input, AutoComplete, Rate, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import classes from "./Search.module.scss";
import { useDebounce } from "use-debounce";

const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: "right",
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title, id, label) => ({
  value: String(id),
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {title}
      <span>{label}</span>
    </div>
  ),
});

// const options = [
//   {
//     label: renderTitle("Libraries"),
//     options: [
//       renderItem("AntDesign", 10000),
//       renderItem("AntDesign UI", 10600),
//     ],
//   },
//   {
//     label: renderTitle("Solutions"),
//     options: [
//       renderItem("AntDesign UI FAQ", 60100),
//       renderItem("AntDesign FAQ", 30010),
//     ],
//   },
//   {
//     label: renderTitle("Articles"),
//     options: [renderItem("AntDesign design language", 100000)],
//   },
// ];

export default function Search() {
  const [query, setQuery] = useState({});
  const [searchedItem, setSearchedItems] = useState([]);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      fetch(
        `https://api.themoviedb.org/3/search/
        multi?api_key=6f5c1908c6dcc7d74f8144d25c153dd9
        &language=en-US&page=1&include_adult=
        false&query=${query}`
      )
        .then((resp) => resp.json())
        .then((data) => setSearchedItems(data.results));
    }
  }, [debouncedQuery]);

  function makeOptions() {
    if (searchedItem && searchedItem.length && query) {
      return [
        {
          label: renderTitle("Movies"),
          options: searchedItem
            .filter((item) => item.media_type === "movie")
            .map((i) =>
              renderItem(
                i.title,
                i.id,
                <Rate
                  style={{ fontSize: 13 }}
                  allowHalf
                  value={i.vote_average / 2}
                />
              )
            ),
        },
        {
          label: renderTitle("Tv Show"),
          options: searchedItem
            .filter((item) => item.media_type === "tv")
            .map((i) =>
              renderItem(
                i.name,
                i.id,
                <Rate
                  style={{ fontSize: 13 }}
                  allowHalf
                  value={i.vote_average / 2}
                />
              )
            ),
        },
        {
          label: renderTitle("People"),
          options: searchedItem
            .filter((item) => item.media_type === "person")
            .map((i) =>
              renderItem(
                i.name,
                i.id,
                <Avatar
                  {...(i.profile_path
                    ? {
                        src: `https://image.tmdb.org/t/p/w45/${i.profile_path}`,
                      }
                    : { icon: <UserOutlined /> })}
                />
              )
            ),
        },
      ].filter((type) => type.options.length);
    }
    return null;
  }
  return (
    <div className={classes.root}>
      <AutoComplete
        options={makeOptions()}
        onSearch={(e) => setQuery(e)}
        onSelect={(e) => console.log("onSelect", e)}
      >
        <Input.Search
          size="large"
          placeholder="search movies, people and tv shows"
        />
      </AutoComplete>
    </div>
  );
}
