export class TsScreenerQuestionStrings {
  public question1: string = 'Have you experienced tinnitus lasting more than 2-3 minutes?';

  public question2: string = 'Have you experienced tinnitus for at least 6 months?';

  public question3: string = 'In a quiet room, can you hear tinnitus?';

  public question4: string = 'When you heard tinnitus this past year, was it caused by a recent event?';

  public question5: string = 'Does your tinnitus seem to come and go on its own, in addition to being caused by a recent event(s)';

  public question6: string = 'Do you experience tinnitus on a: ';
}

export class TsScreenerAnswerStrings {
  public YES: string = 'YES';

  public NO: string = 'NO';

  public ALWAYS: string = 'Always';

  public USUALLY: string = 'Usually';

  public SOMETIMES_OCCASIONALLY: string = 'Sometimes/Occasionally';

  public YES_ALWAYS: string = 'YES, Always';

  public YES_SOMETIMES: string = 'YES, Sometimes';

  public DAILY_OR_WEEKLY_BASIS: string = 'Daily or weekly basis';

  public MONTHLY_OR_YEARLY_BASIS: string = 'Monthly or yearly basis';
}

export class ThsQuestionStrings {
  // Tinnitus
  public question1: string = 'Over the last week, tinnitus kept me from sleeping:';

  public question2: string = 'Over the last week, tinnitus kept me from concentrating on reading:';

  public question3: string = 'Over the last week, tinnitus kept me from relaxing:';

  public question4: string = 'Over the last week, I couldn\'t get my mind off of my tinnitus:';

  // Hearing
  public question5: string = 'Over the last week, I couldn\'t understand what others were saying in noisy or crowded places:';

  public question6: string = 'Over the last week, I couldn\'t understand what people were saying on TV or in movies:';

  public question7: string = 'Over the last week, I couldn\'t understandpeople with soft voices:';

  public question8: string = 'Over the last week, I couldn\'t understand what was being said in group conversations:';

  // Sound Tolerance
  public question9: string = 'Over the last week, sounds were too loud or uncomfortable for me when they seemed normal to others around me.*';

  // only appears is 1,2,3 or 4 is answered to question above
  public question10: string = 'Please list two examples of sounds that are too loud or uncomfortable for you, but seem normal to others:';

  public note: string = '*If sounds are too loud for you when wearing hearing aids, please tell your audiologist.';
}

export class ThsAnswerStrings {
  public NO: string = '0 - No, not a problem';

  public SMALL_YES: string = '1 - Yes, a small problem';

  public MODERATE_YES: string = '2 - Yes, a moderate problem';

  public BIG_YES: string = '3 - Yes, a big problem';

  public VERY_BIG_YES: string = '4 - Yes, a very big problem';
}
