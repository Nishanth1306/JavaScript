let group = {
    title: "Language",
    lang: ["Java", "JavaScript", "Python"],
  
    showList() {
      this.lang.forEach(
        lang => console.log(this.title + ': ' + lang)
      );
    }
  };
  
  group.showList();