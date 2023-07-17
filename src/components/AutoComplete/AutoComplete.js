import React from "react";
import { Select } from "antd";
import "./AutoComplete.scss";
import { SearchOutlined, LoadingOutlined } from "@ant-design/icons";

const suffix = (loading) => {
  const styleProps = {
    fontSize: 16,
    color: "#1677ff",
  };
  return loading ? (
    <LoadingOutlined style={styleProps} />
  ) : (
    <SearchOutlined style={styleProps} />
  );
};

const AutoComplete = ({
  options = [],
  handleSearch = () => {
    /* Nothing here */
  },
  onSelect = () => {
    /* Nothing here */
  },
  loading = false,
  value = [],
  placeholder = "Search Google Maps",
  ...props
}) => {
  return (
    <div className="auto-complete-container">
      <Select
        value={value}
        showSearch
        placeholder={placeholder}
        filterOption={false}
        onSearch={handleSearch}
        onChange={onSelect}
        notFoundContent={null}
        options={options}
        suffixIcon={suffix(loading)}
        labelInValue
        allowClear
      />
    </div>
  );
};
export default AutoComplete;
