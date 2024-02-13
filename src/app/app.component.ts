import { Component, ElementRef, Renderer2 } from '@angular/core';
import * as confetti from 'canvas-confetti';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alarm';
  showMail: boolean = true;
  displayModal: boolean = false;
  videoUrl: any;
  videoHeader: any;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    AOS.init({ duration: 1000 });//AOS - 2
    AOS.refresh();
  }

  public surprise(): void {
    const canvas = this.renderer2.createElement('canvas');
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
    const myConfetti = confetti.create(canvas, {
      resize: true // will fit all screen sizes
    });
    myConfetti();
  }

  showSurprise() {
    this.showMail = false;
    this.surprise();
  }

  showVideo(video: any) {
    this.videoUrl = video;
    if (video == 1) {
      window.open("https://drive.google.com/file/d/14TtMFo2D1VlpR9FPZ8KIe3pMxHRQ1-4i/view?usp=sharing");
      // this.videoUrl = "../assets/video-1.mp4";
      this.videoHeader = "LOVE 50%";
      // this.displayModal = true;
    }
    else if (video == 2) {
      window.open("https://drive.google.com/file/d/14UblW9jSUB3vpyFyLIs9ZSnAVmHdkwqZ/view?usp=sharing");
      // this.videoUrl = "../assets/video-2.mp4";
      this.videoHeader = "LOVE 75%";
      // this.displayModal = true;
    }
    else {
      window.open("https://drive.google.com/file/d/14a9DYweJZsyo2aozIjk8LqdxxeBOma0n/view?usp=sharing")
      // this.videoUrl = "../assets/video-3.mp4";
      this.videoHeader = "LOVE 100%";
      // this.displayModal = true;
    }
  }

}
