import { Component, OnInit } from '@angular/core';
// import { MaterialModule, MdCheckboxModule} from '@angular/material';
// import { FormsModule } from '@angular/forms';
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
  selector: 'audiogram',
  templateUrl: './audiogram.component.html',
  styleUrls: ['./audiogram.component.css']
})

export class AudiogramComponent implements OnInit {
  public testTypes = [
    'Conductive',
    'Sensorneural',
    'Mixed'
  ];

  public severities = [
    'Normal',
    'Moderate',
    'Moderate/Severe',
    'Severe',
    'Profound'
  ];

  public configurations = [
    'Symmetric',
    'Asymetric',
    'Progressive',
    'Suddend',
    'Flat',
    'Rising',
    'Cookie Bite',
    'Precipitious',
    'Noise-Notch',
    'Corner'
  ];

  public ngOnInit() { }

}
