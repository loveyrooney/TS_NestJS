export default function Branchtab({ list }) {
  return (
    <>
      <ul>
        {list.map((el, index) => (
          <li key={index}>
            #{el.synNo}. {el.synTitle} - {el.synSubtitle}
          </li>
        ))}
      </ul>
    </>
  );
}
