import { Profiler, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FirstTask } from "./task1";
import { SecondTask } from "./task2";
import { useOnlineStatus } from "./task3/useOnlineStatus";
import { uselocalStorage } from "./task4/useLocalStorage";
import { FifthTask } from "./task5";

function App() {
  // ------------ Task 3 ------------
  const isUserOnline = useOnlineStatus();

  // -------- Task 4 --------
  const [setItem, getItem] = uselocalStorage("keyls");
  const [setLs, getLs] = uselocalStorage("anurag");

  setItem("asdf asdf");
  setLs("asdf asdf from second");
  const a = getLs();
  console.log(a);
  // ------- task 4 end ----------

  function onRender(id, phase, actualDuration, baseDuration, startTime) {
    console.log(
      `id : ${id}, phase : ${phase}, startTime : ${actualDuration}, baseDuration : ${baseDuration}, actualDuration : ${startTime}`
    );
  }

  return (
    <div>
      {/* Task 3 */}
      {isUserOnline ? (
        <div className="m-2 rounded-xl w-fit text-lg font-semibold p-1 text-green-500 border border-green-300 shadow-2xs">
          Online
        </div>
      ) : (
        <div className="m-2 rounded-xl w-fit text-lg font-semibold p-1 text-red-500 border border-red-300 shadow-2xs">
          Offline
        </div>
      )}
      {/* Task 1 */}
      <FirstTask />
      {/* Task 2 */}
      <Profiler id="task2" onRender={onRender}>
        <SecondTask />
      </Profiler>
      {/* Task 5 */}
      <FifthTask />
    </div>
  );
}

export default App;
