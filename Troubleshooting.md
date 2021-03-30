# Troubleshooting

- [Git](#git)
- [Docker Desktop](#docker-desktop)
- [MySQL](#mysql)

Should you have any issues installing the required software the information below may help.

---

## Git

### Windows

1. Install [Git](https://git-scm.com/download/win)
2. Open Git Bash or PowerShell to confirm successful install `git --version`

### Mac

1. Open Terminal, enter `xcode-select --install` or install [homebrew](https://brew.sh/) or xcode and follow onscreen instructions
2. Confirm successful install `git --version`

---

## Docker Desktop

### Windows

1. [Docker Desktop](https://www.docker.com/get-started) (requires restart)
2. Docker will now prompt you to install [wsl2-kernel](https://docs.microsoft.com/en-gb/windows/wsl/wsl2-kernel)

### Mac

1. [Docker Desktop](https://www.docker.com/get-started)

---

## MySQL

MySQL runs on port 3306.  If you already have MySQL installed and running on your laptop or 
PC, you may have conflicts.  Please shutdown your local instance of MySQL by following [these 
instructions](https://www.mysqltutorial.org/mysql-administration/stop-mysql/) on Windows or 
Mac.  (Mac users should follow the Linux instructions.)
  
As a last resort, you can 'kill' the process.  Open a terminal on Windows (Git Bash) or Mac, 
and run the following:
```
ps ax | grep mysql | grep -v grep | awk {'print $1'} | xargs kill -9
```

Or on Windows, open the Task Manager, search for the running MySQL service, and terminate it.
