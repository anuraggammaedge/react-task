import { useMemo } from "react";
import { FixedSizeList as List } from "react-window";

export const EightTask = () => {
  const itemCount = 10000;
  const data = useMemo(
    () =>
      Array.from({ length: itemCount }, (_, index) => ({
        id: index,
        text: `List Item ${index + 1} `,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti neque facilis corrupti corporis unde voluptatum voluptates aliquam necessitatibus odio provident.",
      })),
    []
  );

  return (
    <div className="border rounded-xl p-4 m-4 flex flex-col items-center justify-center content-center">
      <h2 className="font-bold text-lg">
        React Window visualization 10000+ Lists
      </h2>
      <ListComponent data={data} itemCount={itemCount} />
    </div>
  );
};

const ListComponent = ({ data, itemCount }) => {
  return (
    <List
      height={500}
      itemCount={itemCount}
      itemSize={80}
      width="100%"
      itemData={data}
    >
      {({ data, index, style }) => (
        <div style={style}>
          <ListItems data={data} index={index} />
        </div>
      )}
    </List>
  );
};

const ListItems = ({ data, index }) => {
  const item = data[index];
  return (
    <div
      className={`p-2 my-2 mx-4 border rounded-xl ${
        item.id % 2 === 0 ? "bg-white" : "bg-gray-300"
      } `}
    >
      <h2 className="font-bold text-lg">{item.text}</h2>
      <p>{item.description}</p>
    </div>
  );
};
