import FavoriteNames from "./FavoriteNames";
const AddNames = ({ searchFilter, favNames, setFavNames }) => {
  const filteredNames = searchFilter.filter(
    (baby) => !favNames.includes(baby.id)
  );
  const addToFavNames = (id) => setFavNames([...favNames, id]);

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
