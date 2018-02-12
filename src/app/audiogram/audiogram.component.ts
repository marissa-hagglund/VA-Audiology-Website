import { Component, OnInit } from '@angular/core';
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

  // Text for test type radio buttons in the template
  public testTypes = [
    'Conductive',
    'Sensorneural',
    'Mixed'
  ];

  // Text for Serverity radio buttons in the template
  public severities = [
    'Normal',
    'Moderate',
    'Moderate/Severe',
    'Severe',
    'Profound'
  ];

  // Text for configurations checkboxes in the template
  public configurations = [
    'Symmetric',
    'Asymmetric',
    'Progressive',
    'Suddend',
    'Flat',
    'Rising',
    'Cookie Bite',
    'Precipitious',
    'Noise-Notch',
    'Corner'
  ];

  // Text for left and right ear in the template
  public ears: [
    'LEFT EAR',
    'RIGHT RIGHT'
  ]

  public ngOnInit() { }

}
