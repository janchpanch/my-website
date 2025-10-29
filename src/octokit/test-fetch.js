fetch("https://api.github.com/repos/janchpanch/my-website/commits")
  .then(res => res.json())
  .then(data => {
    const commits = data;
    console.log(commits);
  });
