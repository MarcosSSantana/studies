import { Component, OnInit } from '@angular/core';
import quizz from 'src/assets/data/quizz_questions.json';
import { Question } from 'src/assets/interface/quizz.interface';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  title: string = "";
  questions!: Question[];
  questionSelected!: Question;

  answers: string[] = [];
  answerSelected: string = "";

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  ngOnInit(): void {
    if (quizz) {
      this.questions = quizz.questions;

      this.title = quizz.title;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionMaxIndex = this.questions.length;
    }
  }

  playerChoose(value: string) {
    this.answers.push(value);
  }


}
