(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2014 distri\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "synth\n=====\n\nWorld's worst synthesizer.\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "Synth\n=====\n\nSynthesizing sound using web audio and crying about it.\n\n    require \"./setup\"\n    {pow} = Math\n\n    context = new AudioContext\n\n    vco = context.createOscillator()\n    vco.frequency.value = 440\n    vco.start(0)\n\n    vca = context.createGain()\n    vca.gain.value = 0.0\n\n    vco.connect(vca)\n    vca.connect(context.destination)\n\n    freq = (x) ->\n      220 * pow(2, x)\n\n    handler = (e) ->\n      vco.frequency.value = freq( e.pageX / innerWidth)\n      vca.gain.value = 1 - (e.pageY / innerHeight)\n\n    document.addEventListener \"mousedown\", handler, false\n    document.addEventListener \"mousemove\", handler, false\n",
      "type": "blob"
    },
    "setup.coffee.md": {
      "path": "setup.coffee.md",
      "mode": "100644",
      "content": "Setup\n=====\n\n    global.AudioContext = \n      global.AudioContext or\n      global.webkitAudioContext\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "width: 320\nheight: 180\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var context, freq, handler, pow, vca, vco;\n\n  require(\"./setup\");\n\n  pow = Math.pow;\n\n  context = new AudioContext;\n\n  vco = context.createOscillator();\n\n  vco.frequency.value = 440;\n\n  vco.start(0);\n\n  vca = context.createGain();\n\n  vca.gain.value = 0.0;\n\n  vco.connect(vca);\n\n  vca.connect(context.destination);\n\n  freq = function(x) {\n    return 220 * pow(2, x);\n  };\n\n  handler = function(e) {\n    vco.frequency.value = freq(e.pageX / innerWidth);\n    return vca.gain.value = 1 - (e.pageY / innerHeight);\n  };\n\n  document.addEventListener(\"mousedown\", handler, false);\n\n  document.addEventListener(\"mousemove\", handler, false);\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "setup": {
      "path": "setup",
      "content": "(function() {\n  global.AudioContext = global.AudioContext || global.webkitAudioContext;\n\n}).call(this);\n\n//# sourceURL=setup.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"width\":320,\"height\":180};",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "entryPoint": "main",
  "repository": {
    "id": 17119898,
    "name": "synth",
    "full_name": "distri/synth",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/synth",
    "description": "World's worst synthesizer.",
    "fork": false,
    "url": "https://api.github.com/repos/distri/synth",
    "forks_url": "https://api.github.com/repos/distri/synth/forks",
    "keys_url": "https://api.github.com/repos/distri/synth/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/synth/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/synth/teams",
    "hooks_url": "https://api.github.com/repos/distri/synth/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/synth/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/synth/events",
    "assignees_url": "https://api.github.com/repos/distri/synth/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/synth/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/synth/tags",
    "blobs_url": "https://api.github.com/repos/distri/synth/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/synth/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/synth/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/synth/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/synth/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/synth/languages",
    "stargazers_url": "https://api.github.com/repos/distri/synth/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/synth/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/synth/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/synth/subscription",
    "commits_url": "https://api.github.com/repos/distri/synth/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/synth/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/synth/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/synth/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/synth/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/synth/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/synth/merges",
    "archive_url": "https://api.github.com/repos/distri/synth/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/synth/downloads",
    "issues_url": "https://api.github.com/repos/distri/synth/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/synth/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/synth/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/synth/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/synth/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/synth/releases{/id}",
    "created_at": "2014-02-23T23:38:03Z",
    "updated_at": "2014-02-23T23:38:03Z",
    "pushed_at": "2014-02-23T23:38:03Z",
    "git_url": "git://github.com/distri/synth.git",
    "ssh_url": "git@github.com:distri/synth.git",
    "clone_url": "https://github.com/distri/synth.git",
    "svn_url": "https://github.com/distri/synth",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 2,
    "branch": "master",
    "defaultBranch": "master"
  },
  "dependencies": {}
});