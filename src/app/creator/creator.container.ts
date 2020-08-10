import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MaterialModule } from "../MaterialModule";
import { from, Subject, Observable, noop } from "rxjs";
import { MatGridListModule } from "@angular/material/grid-list";
import { RestClientService } from "../model/rest-client.service";
import { multiScan } from "rxjs-multi-scan";
import { CV } from "../model/data";

@Component({
  selector: "app-creator",
  templateUrl: "./creator.container.html",
  styleUrls: ["./creator.container.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatorComponent {
  private cvUpdate: Subject<CV> = new Subject();

  cv$: Observable<CV> = multiScan(
    this.restClient.get("1"),
    (oldCV, upodatedCV) => (oldCV = upodatedCV),
    this.cvUpdate,
    (oldCV, upodatedCV) => (oldCV = upodatedCV),
    new CV()
  );

  constructor(private restClient: RestClientService) {}

  update(cv: CV): void {
    this.restClient.update(cv).subscribe({
      next: (cv) => this.cvUpdate.next(cv),
      error: noop,
    });
  }
}
