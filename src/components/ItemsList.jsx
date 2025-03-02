export default function ItemsList({ items, path }) {
  return (
    <ul className="list-group bg-white border border-gray-200 rounded-md p-0 flex flex-col">
      {items.map((item, index) => (
        <li key={item.id} className="list-group-item">
          <a
            href={`${path}/${item.id}`}
            className={`w-full p-2 items-center grid grid-cols-[30px_1fr_1fr] gap-2 hover:bg-gray-200 ${
              index % 2 === 0 ? "bg-gray-100" : ""
            }`}
          >
            <span className="truncate">{item.id}</span>
            <span>{item.name}</span>
            <span>{item.email ?? item.description}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
