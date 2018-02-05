
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
    readonly answer;
    constructor(content: String, score: Number, answer: String) {
        super('Question');
        this.content = content;
        this.score   = score;
        this.answer  = answer;
    }
  }
  export class Description extends summayItem {
    readonly content
    constructor(content: String) {
        super('Description');
        this.content = content;
    }
}

