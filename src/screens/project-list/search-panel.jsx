/**
@Author: xiaolifeipiao
@Description: 搜索框
@version: 0.0.0
@Date: 2022-01-03 19:58:06
@LastEditTime: 2022-01-04 13:30:42
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\search-panel.jsx
 */
export const SearchPanel = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('').then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [param]);
  return (
    <form action="">
      <div>
        {/* // 浅拷贝等价
        setParam(Object.assign({}, param, { name: e.target.value })); */}
        <input
          type="text"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        ></input>
        <select
          value={param.personId}
          onChange={(e) =>
            setParam({
              ...param,
              personId: e.target.value,
            })
          }
        >
          <option value={''}>负责人</option>
          {users.map((user) => (
            <option value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
};
