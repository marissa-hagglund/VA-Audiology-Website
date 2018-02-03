
class summayItem {
    readonly type;
    constructor(type: String) {
      this.type = type;
    }
}
  
  export class SurveyTitle extends summayItem {
    readonly title;
    constructor(title: String) {
        super('SurveyTitle');
        this.title = title;
    }
  }

  export class SectionTitle extends summayItem {
    readonly title;
    readonly totalScore;
    constructor(title: String, totalScore) {
        super('SectionTitle');
        this.title = title;
        this.totalScore = totalScore;
    }
  }

  export class Question extends summayItem {
    readonly content;
    readonly score;
    constructor(content: String, score: Number) {
        super('Question');
        this.content = content;
        this.score   = score;
    }
  }
  export class Description extends summayItem {
    readonly content
    constructor(content: String) {
        super('Description');
        this.content = content;
    }
}

