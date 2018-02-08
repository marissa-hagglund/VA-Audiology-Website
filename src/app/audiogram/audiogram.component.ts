import { Component, OnInit } from '@angular/core';
// import { ActivatedRouteSnapshot } from '@angular/core';
import { AudiogramTypeStrings,
  AudiogramSeverityStrings,
  AudiogramConfigurationStrings
} from '../common/audiologist-resource-strings';

/*
Audiogram Test Component for the audiologist view:
Displays all the labels, radio buttons and checkboxes.
This component does not save information to any data services/databases
*/
@Component({
  selector: 'app-audiogram',
  templateUrl: './audiogram.component.html',
  styleUrls: ['./audiogram.component.css']
})
export class AudiogramComponent implements OnInit{
  public typeStrings: AudiogramTypeStrings = new AudiogramTypeStrings();
  public severityStrings: AudiogramSeverityStrings = new AudiogramSeverityStrings();
  public configStrings: AudiogramConfigurationStrings = new AudiogramConfigurationStrings();

  public testType1: string = this.typeStrings.conductive;
  public testType2: string = this.typeStrings.sensorNeural;
  public testType3: string = this.typeStrings.mixed;

  public ngOnInit() { }

}
