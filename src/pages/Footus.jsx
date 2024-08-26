import React from 'react';
import Ranking_footus from '../components/footus/ranking-footus';
import Calendar_footus from '../components/footus/calendar-footus';
import '../styles/pages/Footus.css';

const footusURL = 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=matches&args[]=';

const urls_ranking = {
  'D1 Elite': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1309',
  'D2 Casque d\'Or': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1311',
  'D3 Casque d\'Argent': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1317',
  'R1 Grand Est': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1457',
  'R1 Bretagne': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1454',
  'R1 Ile de France': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1463',
  'R1 Nouvelle Aquitaine': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1488',
  'R1 Auvergne Rhône Alpes (à 9) OUEST': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1450',
  'R1 Auvergne Rhône Alpes (à 9) EST': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1451',
  'R1 Bourgogne Franche-Comté (à 9)': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1447',
  'R1 Hauts de France (à 9)': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1460',
  'R1 Ligue Sud (à 9)': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1470',
  'R1 Normandie (à 9)': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1466'
};

const urls_calendar = {
  'Journée 1 - D2 Casque D\'or': footusURL + '4174',
  'Journée 2 - D2 Casque D\'or': footusURL + '4176',
  'Journée 3 - D2 Casque D\'or': footusURL + '4178',
  'Journée 4 - D2 Casque D\'or': footusURL + '4180',
  'Journée 5 - D2 Casque D\'or': footusURL + '4182',
  'Journée 6 - D2 Casque D\'or': footusURL + '4184',
  'Journée 7 - D2 Casque D\'or': footusURL + '4186',
  'Journée 8 - D2 Casque D\'or': footusURL + '4188',
  'Journée 9 - D2 Casque D\'or': footusURL + '4190',
  'Journée 10 - D2 Casque D\'or': footusURL + '4192',



  'Journée 1 - D3 Casque D\'argent': footusURL + '4215',
  'Journée 2 - D3 Casque D\'argent': footusURL + '4218',
  'Journée 3 - D3 Casque D\'argent': footusURL + '4219',
  'Journée 4 - D3 Casque D\'argent': footusURL + '4224',
  'Journée 5 - D3 Casque D\'argent': footusURL + '4225',
  'Journée 6 - D3 Casque D\'argent': footusURL + '4226',



  'Journée 1 - R1 Bretagne': footusURL + '4525',
  'Journée 2 - R1 Bretagne': footusURL + '4526',
  'Journée 3 - R1 Bretagne': footusURL + '4527',
  'Journée 4 - R1 Bretagne': footusURL + '4528',
  'Journée 5 - R1 Bretagne': footusURL + '4529',
  'Journée 6 - R1 Bretagne': footusURL + '4530',
  // 'Demi-Finale - R1 Bretagne': footusURL + '',
  'Finale - R1 Bretagne': footusURL + '4707',


  
  'Journée 1 - R1 Grand Est': footusURL + '4531',
  'Journée 2 - R1 Grand Est': footusURL + '4532',
  'Journée 3 - R1 Grand Est': footusURL + '4533',
  'Journée 4 - R1 Grand Est': footusURL + '4534',
  'Journée 5 - R1 Grand Est': footusURL + '4535',
  'Journée 6 - R1 Grand Est': footusURL + '4536',
  'Journée 7 - R1 Grand Est': footusURL + '4537',
  'Journée 8 - R1 Grand Est': footusURL + '4538',
  'Journée 9 - R1 Grand Est': footusURL + '4539',
  'Journée 10 - R1 Grand Est': footusURL + '4540',
  // 'Demi-Finale - R1 Grand Est': footusURL + '',
  'Finale - R1 Grand Est': footusURL + '4709',



  'Journée 1 - R1 Ile de France': footusURL + '4546',
  'Journée 2 - R1 Ile de France': footusURL + '4547',
  'Journée 3 - R1 Ile de France': footusURL + '4548',
  'Journée 4 - R1 Ile de France': footusURL + '4549',
  'Journée 5 - R1 Ile de France': footusURL + '4550',
  'Journée 6 - R1 Ile de France': footusURL + '4551',
  'Journée 7 - R1 Ile de France': footusURL + '4552',
  'Demi-Finale - R1 Ile de France': footusURL + '4689',
  'Finale - R1 Ile de France': footusURL + '4705',



  'Journée 1 - R1 Nouvelle Aquitaine': footusURL + '4589',
  'Journée 2 - R1 Nouvelle Aquitaine': footusURL + '4590',
  'Journée 3 - R1 Nouvelle Aquitaine': footusURL + '4591',
  'Journée 4 - R1 Nouvelle Aquitaine': footusURL + '4592',
  'Journée 5 - R1 Nouvelle Aquitaine': footusURL + '4593',
  'Journée 6 - R1 Nouvelle Aquitaine': footusURL + '4594',
  'Journée 7 - R1 Nouvelle Aquitaine': footusURL + '4595',
  // 'Demi-Finale - R1 Nouvelle Aquitaine': footusURL + '',
  'Finale - R1 Nouvelle Aquitaine': footusURL + '4696',



  'Journée 1 - R1 Auvergne Rhône Alpes (à 9) OUEST': footusURL + '4519',
  'Journée 2 - R1 Auvergne Rhône Alpes (à 9) OUEST': footusURL + '4520',
  'Journée 3 - R1 Auvergne Rhône Alpes (à 9) OUEST': footusURL + '4521',
  'Journée 4 - R1 Auvergne Rhône Alpes (à 9) OUEST': footusURL + '4522',
  'Journée 5 - R1 Auvergne Rhône Alpes (à 9) OUEST': footusURL + '4523',
  'Journée 6 - R1 Auvergne Rhône Alpes (à 9) OUEST': footusURL + '4524',
  
  'Journée 1 - R1 Auvergne Rhône Alpes (à 9) EST': footusURL + '4509',
  'Journée 2 - R1 Auvergne Rhône Alpes (à 9) EST': footusURL + '4510',
  'Journée 3 - R1 Auvergne Rhône Alpes (à 9) EST': footusURL + '4511',
  'Journée 4 - R1 Auvergne Rhône Alpes (à 9) EST': footusURL + '4512',
  'Journée 5 - R1 Auvergne Rhône Alpes (à 9) EST': footusURL + '4513',
  'Journée 6 - R1 Auvergne Rhône Alpes (à 9) EST': footusURL + '4514',
  'Journée 7 - R1 Auvergne Rhône Alpes (à 9) EST': footusURL + '4515',
  'Journée 8 - R1 Auvergne Rhône Alpes (à 9) EST': footusURL + '4516',
  'Journée 9 - R1 Auvergne Rhône Alpes (à 9) EST': footusURL + '4517',
  'Journée 10 - R1 Auvergne Rhône Alpes (à 9) EST': footusURL + '4518',
  
  'Demi-Finale - R1 Auvergne Rhône Alpes (à 9)': footusURL + '4680',
  'Finale - R1 Auvergne Rhône Alpes (à 9)': footusURL + '4692',



  'Journée 1 - R1 Bourgogne Franche-Comté (à 9)': footusURL + '4504',
  'Journée 2 - R1 Bourgogne Franche-Comté (à 9)': footusURL + '4505',
  'Journée 3 - R1 Bourgogne Franche-Comté (à 9)': footusURL + '4506',
  'Journée 4 - R1 Bourgogne Franche-Comté (à 9)': footusURL + '4507',
  'Journée 5 - R1 Bourgogne Franche-Comté (à 9)': footusURL + '4508',
  // 'Demi-Finale - R1 Bourgogne Franche-Comté (à 9)': footusURL + '',
  'Finale - R1 Bourgogne Franche-Comté (à 9)': footusURL + '4702',



  'Journée 1 - R1 Hauts de France (à 9)': footusURL + '4541',
  'Journée 2 - R1 Hauts de France (à 9)': footusURL + '4542',
  'Journée 3 - R1 Hauts de France (à 9)': footusURL + '4543',
  'Journée 4 - R1 Hauts de France (à 9)': footusURL + '4544',
  'Journée 5 - R1 Hauts de France (à 9)': footusURL + '4545',
  // 'Demi-Finale - R1 Hauts de France (à 9)': footusURL + '',
  // 'Finale - R1 Hauts de France (à 9)': footusURL + '47',



  'Journée 1 - R1 Ligue Sud (à 9)': footusURL + '4569',
  'Journée 2 - R1 Ligue Sud (à 9)': footusURL + '4570',
  'Journée 3 - R1 Ligue Sud (à 9)': footusURL + '4571',
  'Journée 4 - R1 Ligue Sud (à 9)': footusURL + '4572',
  'Journée 5 - R1 Ligue Sud (à 9)': footusURL + '4573',
  'Journée 5 - R1 Ligue Sud (à 9)': footusURL + '4574',
  'Journée 5 - R1 Ligue Sud (à 9)': footusURL + '4596',
  // 'Demi-Finale - R1 Ligue Sud (à 9)': footusURL + '',
  // 'Finale - R1 Ligue Sud (à 9)': footusURL + '47',



  'Journée 1 - R1 Normandie (à 9)': footusURL + '4554',
  'Journée 2 - R1 Normandie (à 9)': footusURL + '4556',
  'Journée 3 - R1 Normandie (à 9)': footusURL + '4558',
  'Journée 4 - R1 Normandie (à 9)': footusURL + '4561',
  'Journée 5 - R1 Normandie (à 9)': footusURL + '4563',
  'Journée 5 - R1 Normandie (à 9)': footusURL + '4565',
  'Journée 5 - R1 Normandie (à 9)': footusURL + '4567',
  'Demi-Finale - R1 Normandie (à 9)': footusURL + '4678',
  'Finale - R1 Normandie (à 9)': footusURL + '4701',
};

const Footus = () => {
  return (
    <div>
      <h1>Football Américain</h1>
      <Ranking_footus urls={urls_ranking} />
      <Calendar_footus urls={urls_calendar} />
    </div>
  );
};

export default Footus;
