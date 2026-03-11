import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [bot, setbot] = useState("");
  const [botlw, setbotlw] = useState("");
  const [userlw, setuserlw] = useState("");
  const [showS, setShow] = useState(true);
  const [UserTurn, setUserTurn] = useState(false);
  const [res, setRes] = useState("");
  const [user, setuser] = useState("");
  const [arr2, setArr2] = useState([]);
  const [timer, setTimer] = useState(20);
  const [isRunning, setIsRunning] = useState(false);
  const arr = [
    "sholay",
    "dangal",
    "lagaan",
    "pk",
    "3 idiots",
    "swades",
    "rang de basanti",
    "dil chahta hai",
    "zindagi na milegi dobara",
    "andhadhun",
    "drishyam",
    "queen",
    "kahaani",
    "bajrangi bhaijaan",
    "barfi",
    "yariyaan",
    "taare zameen par",
    "chak de india",
    "kabir singh",
    "gully boy",
    "padmaavat",
    "devdas",
    "om shanti om",
    "kal ho naa ho",
    "kuch kuch hota hai",
    "dilwale dulhania le jayenge",
    "veer zaara",
    "don",
    "don 2",
    "raees",
    "fan",
    "zero",
    "pathaan",
    "jawaan",
    "chennai express",
    "happy new year",
    "main hoon na",
    "rab ne bana di jodi",
    "jab tak hai jaan",
    "rockstar",
    "tamasha",
    "highway",
    "love aaj kal",
    "jab we met",
    "udta punjab",
    "haider",
    "omkara",
    "maqbool",
    "gangs of wasseypur",
    "gangs of wasseypur 2",
    "article 15",
    "badhaai ho",
    "stree",
    "bhediya",
    "dream girl",
    "pyaar ka punchnama",
    "pyaar ka punchnama 2",
    "sonu ke titu ki sweety",
    "luka chuppi",
    "bareilly ki barfi",
    "raanjhanaa",
    "tanu weds manu",
    "tanu weds manu returns",
    "badlapur",
    "october",
    "pink",
    "thappad",
    "mulk",
    "neerja",
    "special 26",
    "baby",
    "holiday",
    "airlift",
    "kesari",
    "singham",
    "singham returns",
    "sooryavanshi",
    "golmaal",
    "golmaal returns",
    "golmaal 3",
    "golmaal again",
    "hera pheri",
    "phir hera pheri",
    "bhool bhulaiyaa",
    "bhool bhulaiyaa 2",
    "hungama",
    "welcome",
    "welcome back",
    "no entry",
    "partner",
    "judwaa",
    "judwaa 2",
    "coolie no 1",
    "housefull",
    "housefull 2",
    "housefull 3",
    "housefull 4",
    "ready",
    "bodyguard",
    "kick",
    "wanted",
    "dabangg",
    "dabangg 2",
    "dabangg 3",
    "race",
    "race 2",
    "race 3",
    "ek tha tiger",
    "tiger zinda hai",
    "war",
    "fighter",
    "student of the year",
    "student of the year 2",
    "kapoor and sons",
    "dear zindagi",
    "english vinglish",
    "piku",
    "black",
    "kabhi khushi kabhie gham",
    "kabhi alvida naa kehna",
    "mohabbatein",
    "baazigar",
    "dar",
    "darr",
    "chak de india",
    "mardaani",
    "mardaani 2",
    "hichki",
    "sultan",
    "bharat",
    "tiger 3",
    "krrish",
    "krrish 3",
    "koi mil gaya",
    "agnipath",
    "bang bang",
    "znmd",
    "rock on",
    "rock on 2",
    "kai po che",
    "chhichhore",
    "super 30",
    "12th fail",
    "uri",
    "sardar udham",
    "madras cafe",
    "parmanu",
    "lakshya",
    "mission mangal",
    "toilet ek prem katha",
    "padman",
    "good newwz",
    "jug jug jeeyo",
    "ram leela",
    "bajirao mastani",
    "gangubai kathiawadi",
    "83",
    "laal singh chaddha",
    "secret superstar",
    "dhoom",
    "dhoom 2",
    "dhoom 3",
    "kranti",
    "border",
    "ghayal",
    "ghayal once again",
    "satya",
    "company",
    "shootout at lokhandwala",
    "shootout at wadala",
    "black friday",
    "page 3",
    "corporate",
    "life in a metro",
    "metro in dino",
    "rocky aur rani ki prem kahani",
    "bawaal",
    "animal",
    "adipurush",
    "tumbbad",
    "bulbbul",
    "inception",
    "interstellar",
    "titanic",
    "avatar",
  ];

  function start() {
    const r = Math.floor(Math.random() * arr.length);
    const f = arr[r];
    // arr.pop();
    arr.splice(r, 1);
    setbot(f);
    setArr2([...arr2, f]);
    setbotlw(f.charAt(f.length - 1));
    setUserTurn((prev) => !prev);
    setShow(false);
    setIsRunning(true);
  }

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          setRes("You Lost !!");
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  function botMain() {
    let startChar = user.charAt(user.length - 1);
    setuser("");
    let next = "";

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].charAt(0) === startChar) {
        if (!arr2.includes(arr[i])) {
          next = arr[i];
          break;
        } else {
          setRes("You Win");
          setTimer(20);
          return;
        }
      }
    }

    setArr2([...arr2, next]);
    setbot(next);
    setbotlw(next.charAt(next.length - 1));
    setUserTurn((prev) => !prev);
  }

  function Procreed() {
    setTimer(20);
    setbot("");
    setbotlw("");
    setUserTurn((prev) => !prev);
    setArr2([...arr2, user]);

    let first = user.charAt(0);
    let last = user.charAt(user.length - 1);

    setuserlw(last);

    if (first === botlw) {
      botMain();
    } else {
      setRes(" You Lost ");
    }
  }

  return (
    <div className="App">
      <h1 className="h1">WebGame</h1>
      {!res && <div className="t"> ⏳ {timer}</div>}
      <h2>Abhinav </h2>
      <div>
        <div className="div1">
          {bot}
          <br />
        </div>
      </div>
      <br />
      <p className="para">
        You Have Give Movie Name Start with <h1 className="red">{botlw}</h1>
      </p>
      <h2> You </h2>

      {user}
      <br />
      {/* {userlw} */}

      {UserTurn && (
        <div>
          <input
            type="text"
            value={user}
            disabled={res}
            placeholder="Write in Lower Case"
            onChange={(e) => setuser(e.target.value)}
          />
          <button className="p" onClick={Procreed}>
            Procreed
          </button>
        </div>
      )}

      {res && <h2 style={{ color: "You Lost" ? "red" : "green" }}>{res}</h2>}

      {showS && (
        <button className="start" onClick={start}>
          Start
        </button>
      )}
    </div>
  );
}
