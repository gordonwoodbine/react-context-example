import { useTest } from './TestProvider';

const Consumer = () => {
  const val = useTest();
  console.log(val);

  return (
    <div>
      {val.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Consumer;
