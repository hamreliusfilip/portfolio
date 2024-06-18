const courseData = [
  { coursecCode: 'TNA001', name: 'FOUNDATION COURSE IN MATHEMATICS', preCourse: '', literature: 'Matematisk analys, en variabel', link: 'https://studieinfo.liu.se/kurs/TNA001', key: '1'},
  { coursecCode: 'TND012', name: 'PROGRAMMING FOUNDATION C++', preCourse: '', literature: 'Programming: Principles and Practice Using C++#C++ direkt#C++ Primer ', link: 'https://studieinfo.liu.se/kurs/TND012', key: '2'},
  { coursecCode: 'TNM088', name: 'DIGITAL MEDIA', preCourse: '', literature: '', link: 'https://studieinfo.liu.se/kurs/TNM088', key: '3'},
  { coursecCode: 'TNA002', name: 'LINEAR ALGEBRA', preCourse: 'TNA001', literature: 'Linjär algebra TNA002', link: 'https://studieinfo.liu.se/kurs/TNA002', key: '4' },
  { coursecCode: 'TNMK30', name: 'ELECTRONIC PUBLISHING', preCourse: 'TND012', literature: '', link: 'https://studieinfo.liu.se/kurs/TNMK30', key: '5' },
  { coursecCode: 'TNA005', name: 'APPLIED MATHEMATICS IN SCIENCE AND TECHNOLOGY', preCourse: 'TNA001, TNA002', literature: 'MATLAB-beräkningar inabout teknik och naturvetenskap : med symbolisk matematik#Matematisk analys, en variabel#Linjär algebra TNA002', link: 'https://studieinfo.liu.se/kurs/TNA005/ht-2023', key: '6' },
  { coursecCode: 'TNA003', name: 'CALCULUS I', preCourse: 'TNA001', literature: 'Matematisk analys, en variabel', link: 'https://studieinfo.liu.se/kurs/TNA003', key: '7' },
  { coursecCode: 'TND002', name: 'OBJECT-ORIENTED PROGRAMMING JAVA', preCourse: 'TND012', literature: '', link: 'https://studieinfo.liu.se/kurs/TND002', key: '8' },
  { coursecCode: 'TNA004', name: 'CALCULUS II', preCourse: 'TNA003', literature: 'Matematisk analys, en variabel', link: 'https://studieinfo.liu.se/kurs/TND002', key: '9' },
  { coursecCode: 'TNM046', name: 'COMPUTER GRAPHICS', preCourse: 'TND012, TNA002, TND002', literature: '', link: 'https://studieinfo.liu.se/kurs/TNM046', key: '10' },
  { coursecCode: 'TNA006', name: 'CALCULUS III', preCourse: 'TNA004, TNA003, TNA001', literature: 'Neymark, Mats, (2017) Matematisk analys: flera variabler#Problemsamling för kursen TNA006', link: 'https://studieinfo.liu.se/kurs/TNA006', key: '11' },
  { coursecCode: 'TNE043', name: 'MECHANICS AND WAVE PHYSICS', preCourse: 'TNA002, TNA003, TNA004', literature: 'Principles of physics#Experimentell problemlösning', link: 'https://studieinfo.liu.se/kurs/TNE043', key: '12' },
  { coursecCode: 'TNM040', name: 'COMMUNICATION AND USER INTERFACES', preCourse: 'TNMK30', literature: '', link: 'https://studieinfo.liu.se/kurs/TNM040', key: '13' },
  { coursecCode: 'TNA007', name: 'VECTOR ANALYSIS', preCourse: 'TNA002, TNA003, TNA004, TNA006', literature: 'Vektoranalys', link: 'https://studieinfo.liu.se/kurs/TNA007', key: '14' },
  { coursecCode: 'TNG033', name: 'PROGRAMMING IN C++', preCourse: 'TND012, TND002', literature: 'C++ direkt#Professional C++#C++ Primer#Matematisk analys, en variabel', link: 'https://studieinfo.liu.se/kurs/TNG033', key: '15' },
  { coursecCode: 'TNG032', name: 'APPLIED TRANSFORM THEORY', preCourse: 'TNA002, TNA003, TNA004', literature: 'Fourier and Laplace Transforms', link: 'https://studieinfo.liu.se/kurs/TNG032', key: '16' },
  { coursecCode: 'TNM059', name: 'GRAPHIC ARTS', preCourse: 'TNA002', literature: '', link: 'https://studieinfo.liu.se/kurs/TNM059', key: '17' },
  { coursecCode: 'TNM061', name: '3D COMPUTER GRAPHICS', preCourse: 'TNM046', literature: '', link: 'https://studieinfo.liu.se/kurs/TNM061', key: '18' },
  { coursecCode: 'TNG006', name: 'STATISTICS', preCourse: 'TNA006', literature: 'Sannolikhetsteori och statistikteori med tillämpningar#Problemsamling för kursen TNG006#Formelsamling i matematisk statistik', link: 'https://studieinfo.liu.se/kurs/TNG006', key: '19' },
  { coursecCode: 'TNG015', name: 'SIGNALS AND SYSTEMS', preCourse: 'TNA002, TNG032', literature: 'Fundamentals of Signals and Systems Using the Web and Matlab', link: 'https://studieinfo.liu.se/kurs/TNG015', key: '20' },
  { coursecCode: 'TFYA65', name: 'PHYSICS OF SOUND', preCourse: 'TNE043', literature: 'Master Handbook of Acoustics#Principles of Digital Audio', link: 'https://studieinfo.liu.se/kurs/TFYA65', key: '21' },
  { coursecCode: 'TNG028', name: 'AUTOMATIC CONTROL', preCourse: 'TNG032, TNG015', literature: 'Reglerteknik - Grundläggande teori', link: 'https://studieinfo.liu.se/kurs/TNG028', key: '22' },
  { coursecCode: 'TNM093', name: 'PRACTICAL DATA VISUALIZATION AND VIRTUAL REALITY', preCourse: 'TNA002, TNA003, TNA004, TNG033, TND002, TNM061', literature: 'The Visualization Handbook#Essential Virtual Reality fast#Information Visualization: Design for Interaction', link: 'https://studieinfo.liu.se/kurs/TNM093', key: '23' },
  { coursecCode: 'TNG022', name: 'MODELLING AND SIMULATION', preCourse: 'TNG006, TNG028', literature: 'Modellbygge och simulering#Modellbygge och simulering, Övningsbok', link: 'https://studieinfo.liu.se/kurs/TNG022', key: '24' },
  { coursecCode: 'TNM087', name: 'IMAGE PROCESSING AND ANALYSIS', preCourse: 'TNA002, TNA006, TNG015, TNA005, TNM059, TNG032', literature: 'Digital Image Processing', link: 'https://studieinfo.liu.se/kurs/TNM087', key: '25' },
  { coursecCode: 'TNM085', name: 'MODELLING PROJECT', preCourse: 'TNG022', literature: '', link: 'https://studieinfo.liu.se/kurs/TNM085', key: '26' },
  { coursecCode: 'TND004', name: 'DATA STRUCTURES', preCourse: 'TNG033', literature: 'Data Structure and Algorithm Analysis in C++', link: 'https://studieinfo.liu.se/kurs/TND004', key: '27' },
]
export { courseData }