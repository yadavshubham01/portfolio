import {GitHubCalendar} from "github-contribution-calendar"


function Github() {
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  console.log(token)
    const my_theme = {
        noContributions:"#f1f5f9",
        low:"#334155",
        moderate:"#1e293b",
        high:"#0f172a",
        veryHigh:"#020617"
    }

  return (
    <div className="container-github" id="github" >
    <h1>My GitHub Contributions</h1>
    <div className="">
        <GitHubCalendar 
        username="yadavshubham01"
        token={token} 
        theme="custom" // must be specified for custom theme to be applied 
        customTheme={my_theme}
        titleColor='#f1f5f9'
        />
    </div>
    </div>
  );
}


export default Github;



