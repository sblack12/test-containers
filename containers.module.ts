import {NgModule} from '@angular/core';
import {CardComponent} from './card/card.component';
import {CollapseComponent} from './collapse/collapse.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InformationPanelComponent} from './information-panel/information-panel.component';
import {WaypointDirective} from './information-panel/directives/waypoints.directive';
import {IconComponent} from './information-panel/icon/icon.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {TooltipTargetDirective} from './tooltip/directives/tooltip-target.directive';

@NgModule({
  declarations: [
    CardComponent,
    CollapseComponent,
    InformationPanelComponent,
    IconComponent,
    WaypointDirective,
    TooltipComponent,
    TooltipTargetDirective
  ],
  imports: [
    BrowserAnimationsModule,
  ],
  exports: [
    CardComponent,
    CollapseComponent,
    InformationPanelComponent,
    TooltipComponent,
    WaypointDirective,
    TooltipComponent,
    TooltipTargetDirective
  ]
})

export class ContainersModule {}
