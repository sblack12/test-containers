import {Directive, Input, OnInit, OnDestroy, Output, EventEmitter, ElementRef} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import {TooltipComponent} from "../tooltip.component";

const SELECTOR: string = '[tooltipTarget]';

@Directive({
  selector: SELECTOR
})
export class TooltipTargetDirective implements OnInit, OnDestroy {
  @Input() tooltipTarget : TooltipComponent;
  @Input() targetAttachment: string = 'top right';
  @Input() attachment: string = 'top left';

  @Output() onTooltipToggle: EventEmitter<any> = new EventEmitter();

  public toggleSubscription: Subscription;

  public constructor(private element: ElementRef) {}

  // this logic used to be in ngAfterViewInit - which was causing an ExpressionChangedAfterItHasBeenCheckedError
  // todo: unit test this logic to ensure that the tool tips work properly

  public ngOnInit(): void {
    if (this.tooltipTarget) {
      this.tooltipTarget.setupTooltip(this.element.nativeElement, this.attachment, this.targetAttachment);
      this.toggleSubscription = this.tooltipTarget.onTooltipToggle.subscribe(toggle => this.onTooltipToggle.emit(toggle));
    }
  }

  public ngOnDestroy(): void {
    if (this.toggleSubscription) {
      this.toggleSubscription.unsubscribe();
    }
  }
}
