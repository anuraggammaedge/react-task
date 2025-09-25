import { Outlet } from "react-router";
import "./App.css";
import { FirstTask } from "./task1";
import { useOnlineStatus } from "./task3/useOnlineStatus";
import { uselocalStorage } from "./task4/useLocalStorage";
import Tenthtask from "./task10";

function App() {
  // ------------ Task 3 ------------
  const isUserOnline = useOnlineStatus();

  // -------- Task 4 --------
  const [setItem, getItem] = uselocalStorage("localStorageKey");
  const [setLs, getLs] = uselocalStorage("keyLs");

  setItem("Data Saved in local storage");
  setLs("trying use hook two times in same file");
  const a = getLs();
  console.log(a);
  // ------- task 4 end ----------

  return (
    <div>
      {/* Task 3 */}
      {isUserOnline ? (
        <div className="m-2 rounded-xl w-fit text-lg font-semibold p-1 text-green-500 border border-green-300 shadow-2xs">
          User Online
        </div>
      ) : (
        <div className="m-2 rounded-xl w-fit text-lg font-semibold p-1 text-red-500 border border-red-300 shadow-2xs">
          User Offline
        </div>
      )}
      {/* Task 1 */}
      <FirstTask />

      <Outlet />
    </div>
  );
}

export default App;
