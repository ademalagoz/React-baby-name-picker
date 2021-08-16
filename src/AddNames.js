import FavoriteNames from "./FavoriteNames";
const AddNames = ({ searchFilter, favName, setFavName }) => {
  const filteredNames = searchFilter.filter(
    (baby) => !favName.includes(baby.id)
  );
  console.log(filteredNames);
  const addToFavNames = (id) => setFavName([...favName, id]);

  return (
    <div>
      <ul>
        {filteredNames.map((baby) => (
          <li
            className={baby.sex === "f" ? "girlColor" : "boyColor"}
            key={baby.id}
          >
            <FavoriteNames baby={baby} onClickFunction={addToFavNames} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddNames;
