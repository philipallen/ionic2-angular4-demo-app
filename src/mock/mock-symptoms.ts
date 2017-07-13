import { SymptomPosition } from '../models/symptomposition';
 
export const SYMPTOMS: SymptomPosition[] = [
  {
    position: 'Head and neck area',
    side: 'front',
    id: 1,
    top: 25,
    left: 114,
    completed: false,
    options: [
      { id: 101, type: 'checkbox', label: 'Hair loss', value: 'hairLoss', checked: false },
      { id: 102, type: 'checkbox', label: 'Headache', value: 'headache', checked: false },
      { id: 103, type: 'checkbox', label: 'Sore throat', value: 'soreThroat', checked: false },
      { id: 104, type: 'checkbox', label: 'Runny nose', value: 'runnyNose', checked: false },
      { id: 105, type: 'checkbox', label: 'Itchy or sore eyes', value: 'itchyEyes', checked: false }
    ]
  },
  {
    position: 'Shoulder area',
    side: 'front',
    id: 2,
    top: 90,
    left: 62,
    completed: false,
    options: [
      { id: 201, type: 'checkbox', label: 'Joint pain', value: 'jointPain', checked: false },
      { id: 202, type: 'checkbox', label: 'Muscle ache / pain', value: 'muscleAche', checked: false },
      { id: 203, type: 'checkbox', label: 'Muscle spasm', value: 'muscleSpasm', checked: false }
    ]
  },
  {
    position: 'Elbow area',
    side: 'front',
    id: 3,
    top: 167,
    left: 53,
    completed: false,
    options: [
      { id: 301, type: 'checkbox', label: 'Joint pain', value: 'jointPain', checked: false },
      { id: 302, type: 'checkbox', label: 'Muscle ache / pain', value: 'muscleAche', checked: false },
      { id: 303, type: 'checkbox', label: 'Muscle spasm', value: 'muscleSpasm', checked: false }
    ]
  },
  {
    position: 'Wrist area',
    side: 'front',
    id: 4,
    top: 250,
    left: 32,
    completed: false,
    options: [
      { id: 401, type: 'checkbox', label: 'Joint pain', value: 'jointPain', checked: false },
      { id: 402, type: 'checkbox', label: 'Muscle ache / pain', value: 'muscleAche', checked: false },
      { id: 403, type: 'checkbox', label: 'Muscle spasm', value: 'muscleSpasm', checked: false }
    ]
  },
  {
    position: 'Chest area',
    side: 'front',
    id: 5,
    top: 110,
    left: 114,
    completed: false,
    options: [
      { id: 501, type: 'checkbox', label: 'Shortness of breath', value: 'shortnessOfBreath', checked: false },
      { id: 502, type: 'checkbox', label: 'Cough', value: 'cough', checked: false },
      { id: 503, type: 'checkbox', label: 'Chest pain', value: 'chestPain', checked: false },
      { id: 504, type: 'checkbox', label: 'Palpitations', value: 'palpitations', checked: false }
    ]
  },
  {
    position: 'Abdomen area',
    side: 'front',
    id: 6,
    top: 200,
    left: 114,
    completed: false,
    options: [
      { id: 601, type: 'checkbox', label: 'Abdominal pain', value: 'abdominalPain', checked: false },
      { id: 602, type: 'checkbox', label: 'Nausea', value: 'nausea', checked: false },
      { id: 603, type: 'checkbox', label: 'Vomiting', value: 'vomiting', checked: false },
      { id: 604, type: 'checkbox', label: 'Constipation', value: 'constipation', checked: false },
      { id: 605, type: 'checkbox', label: 'Diarrhoea', value: 'diarrhoea', checked: false },
      { id: 606, type: 'checkbox', label: 'Indigestion', value: 'indigestion', checked: false },
      { id: 607, type: 'checkbox', label: 'Abdominal swelling', value: 'abdominalSwelling', checked: false }
    ]
  },
  // {
  //   position: 'Bowel area',
  //   side: 'front',
  //   id: 7,
  //   top: 245,
  //   left: 112,
  //   completed: false,
  //   options: [
  //     { id: 701, type: 'checkbox', label: 'Swelling', value: 'swelling', checked: false },
  //     { id: 702, type: 'checkbox', label: 'Blood in the stool', value: 'bleeding', checked: false },
  //     { id: 703, type: 'checkbox', label: 'Diarrhea', value: 'diarrhea', checked: false },
  //     { id: 704, type: 'checkbox', label: 'Lump', value: 'lump', checked: false },
  //     { id: 705, type: 'checkbox', label: 'Severe pain', value: 'severePain', checked: false }
  //   ]
  // },
  {
    position: 'Knee area',
    side: 'front',
    id: 8,
    top: 340,
    left: 132,
    completed: false,
    options: [
      { id: 801, type: 'checkbox', label: 'Joint pain', value: 'jointPain', checked: false },
      { id: 802, type: 'checkbox', label: 'Muscle ache / pain', value: 'muscleAche', checked: false },
      { id: 803, type: 'checkbox', label: 'Muscle spasm', value: 'muscleSpasm', checked: false }
    ]
  },
  {
    position: 'Ankle area',
    side: 'front',
    id: 9,
    top: 457,
    left: 128,
    completed: false,
    options: [
      { id: 901, type: 'checkbox', label: 'Joint pain', value: 'jointPain', checked: false },
      { id: 902, type: 'checkbox', label: 'Muscle ache / pain', value: 'muscleAche', checked: false },
      { id: 903, type: 'checkbox', label: 'Muscle spasm', value: 'muscleSpasm', checked: false },
      { id: 904, type: 'checkbox', label: 'Swelling', value: 'swelling', checked: false }
    ]
  },
  {
    position: 'Skin area',
    side: 'front',
    id: 10,
    top: 50,
    left: 192,
    completed: false,
    options: [
      { id: 1001, type: 'checkbox', label: 'Dry skin', value: 'drySkin', checked: false },
      { id: 1007, type: 'checkbox', label: 'Itch', value: 'itch', checked: false },
      { id: 1008, type: 'checkbox', label: 'Rash', value: 'rash', checked: false },
      { id: 1008, type: 'checkbox', label: 'Loss of hair', value: 'lossOfHair', checked: false }
    ]
  },
  {
    position: 'Upper back area',
    side: 'rear',
    id: 11,
    top: 110,
    left: 114,
    completed: false,
    options: [
      { id: 1101, type: 'checkbox', label: 'Joint pain', value: 'jointPain', checked: false },
      { id: 1102, type: 'checkbox', label: 'Muscle ache / pain', value: 'muscleAche', checked: false },
      { id: 1103, type: 'checkbox', label: 'Muscle spasm', value: 'muscleSpasm', checked: false }
    ]
  },
  {
    position: 'Lower back area',
    side: 'rear',
    id: 12,
    top: 190,
    left: 114,
    completed: false,
    options: [
      { id: 1201, type: 'checkbox', label: 'Joint pain', value: 'jointPain', checked: false },
      { id: 1202, type: 'checkbox', label: 'Muscle ache / pain', value: 'muscleAche', checked: false },
      { id: 1203, type: 'checkbox', label: 'Muscle spasm', value: 'muscleSpasm', checked: false }
    ]
  },
  // {
  //   position: 'Bottom area',
  //   side: 'rear',
  //   id: 12,
  //   top: 250,
  //   left: 112,
  //   completed: false,
  //   options: [
  //     { id: 1201, type: 'checkbox', label: 'Shooting pains', value: 'shootingPains', checked: false },
  //     { id: 1202, type: 'checkbox', label: 'Muscle ache', value: 'muscleAche', checked: false },
  //     { id: 1203, type: 'checkbox', label: 'Redness', value: 'redness', checked: false },
  //     { id: 1204, type: 'checkbox', label: 'Tingling', value: 'tingling', checked: false },
  //     { id: 1205, type: 'checkbox', label: 'Severe pain', value: 'severePain', checked: false },
  //     { id: 1206, type: 'checkbox', label: 'Numbness', value: 'numbness', checked: false },
  //     { id: 1207, type: 'checkbox', label: 'Itchy skin', value: 'itchySkin', checked: false },
  //     { id: 1208, type: 'checkbox', label: 'Rashes', value: 'rashes', checked: false }
  //   ]
  // },
  {
    position: 'Hip area',
    side: 'rear',
    id: 13,
    top: 230,
    left: 82,
    completed: false,
    options: [
      { id: 1301, type: 'checkbox', label: 'Joint pain', value: 'jointPain', checked: false },
      { id: 1302, type: 'checkbox', label: 'Muscle ache / pain', value: 'muscleAche', checked: false },
      { id: 1303, type: 'checkbox', label: 'Muscle spasm', value: 'muscleSpasm', checked: false }
    ]
  }
];