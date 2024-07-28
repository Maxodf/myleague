import React from 'react';
import Ranking_footus from '../components/footus/ranking-footus';
import Calendar_footus from '../components/footus/calendar-footus';

const matchesURL = 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=matches&args[]=';

const urls = {
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
  'Journée 1 - D2 Casque D\'or': matchesURL + '4174',
  'Journée 2 - D2 Casque D\'or': matchesURL + '4176',
  'Journée 3 - D2 Casque D\'or': matchesURL + '4178',
  'Journée 4 - D2 Casque D\'or': matchesURL + '4180',
  'Journée 5 - D2 Casque D\'or': matchesURL + '4182',
  'Journée 6 - D2 Casque D\'or': matchesURL + '4184',
  'Journée 7 - D2 Casque D\'or': matchesURL + '4186',
  'Journée 8 - D2 Casque D\'or': matchesURL + '4188',
  'Journée 9 - D2 Casque D\'or': matchesURL + '4190',
  'Journée 10 - D2 Casque D\'or': matchesURL + '4192',



  'Journée 1 - D3 Casque D\'argent': matchesURL + '4215',
  'Journée 2 - D3 Casque D\'argent': matchesURL + '4218',
  'Journée 3 - D3 Casque D\'argent': matchesURL + '4219',
  'Journée 4 - D3 Casque D\'argent': matchesURL + '4224',
  'Journée 5 - D3 Casque D\'argent': matchesURL + '4225',
  'Journée 6 - D3 Casque D\'argent': matchesURL + '4226',



  'Journée 1 - R1 Bretagne': matchesURL + '4525',
  'Journée 2 - R1 Bretagne': matchesURL + '4526',
  'Journée 3 - R1 Bretagne': matchesURL + '4527',
  'Journée 4 - R1 Bretagne': matchesURL + '4528',
  'Journée 5 - R1 Bretagne': matchesURL + '4529',
  'Journée 6 - R1 Bretagne': matchesURL + '4530',
  // 'Demi-Finale - R1 Bretagne': matchesURL + '',
  'Finale - R1 Bretagne': matchesURL + '4707',


  
  'Journée 1 - R1 Grand Est': matchesURL + '4531',
  'Journée 2 - R1 Grand Est': matchesURL + '4532',
  'Journée 3 - R1 Grand Est': matchesURL + '4533',
  'Journée 4 - R1 Grand Est': matchesURL + '4534',
  'Journée 5 - R1 Grand Est': matchesURL + '4535',
  'Journée 6 - R1 Grand Est': matchesURL + '4536',
  'Journée 7 - R1 Grand Est': matchesURL + '4537',
  'Journée 8 - R1 Grand Est': matchesURL + '4538',
  'Journée 9 - R1 Grand Est': matchesURL + '4539',
  'Journée 10 - R1 Grand Est': matchesURL + '4540',
  // 'Demi-Finale - R1 Grand Est': matchesURL + '',
  'Finale - R1 Grand Est': matchesURL + '4709',



  'Journée 1 - R1 Ile de France': matchesURL + '4546',
  'Journée 2 - R1 Ile de France': matchesURL + '4547',
  'Journée 3 - R1 Ile de France': matchesURL + '4548',
  'Journée 4 - R1 Ile de France': matchesURL + '4549',
  'Journée 5 - R1 Ile de France': matchesURL + '4550',
  'Journée 6 - R1 Ile de France': matchesURL + '4551',
  'Journée 7 - R1 Ile de France': matchesURL + '4552',
  'Demi-Finale - R1 Ile de France': matchesURL + '4689',
  'Finale - R1 Ile de France': matchesURL + '4705',



  'Journée 1 - R1 Nouvelle Aquitaine': matchesURL + '4589',
  'Journée 2 - R1 Nouvelle Aquitaine': matchesURL + '4590',
  'Journée 3 - R1 Nouvelle Aquitaine': matchesURL + '4591',
  'Journée 4 - R1 Nouvelle Aquitaine': matchesURL + '4592',
  'Journée 5 - R1 Nouvelle Aquitaine': matchesURL + '4593',
  'Journée 6 - R1 Nouvelle Aquitaine': matchesURL + '4594',
  'Journée 7 - R1 Nouvelle Aquitaine': matchesURL + '4595',
  // 'Demi-Finale - R1 Nouvelle Aquitaine': matchesURL + '',
  'Finale - R1 Nouvelle Aquitaine': matchesURL + '4696',



  'Journée 1 - R1 Auvergne Rhône Alpes (à 9) OUEST': matchesURL + '4519',
  'Journée 2 - R1 Auvergne Rhône Alpes (à 9) OUEST': matchesURL + '4520',
  'Journée 3 - R1 Auvergne Rhône Alpes (à 9) OUEST': matchesURL + '4521',
  'Journée 4 - R1 Auvergne Rhône Alpes (à 9) OUEST': matchesURL + '4522',
  'Journée 5 - R1 Auvergne Rhône Alpes (à 9) OUEST': matchesURL + '4523',
  'Journée 6 - R1 Auvergne Rhône Alpes (à 9) OUEST': matchesURL + '4524',
  
  'Journée 1 - R1 Auvergne Rhône Alpes (à 9) EST': matchesURL + '4509',
  'Journée 2 - R1 Auvergne Rhône Alpes (à 9) EST': matchesURL + '4510',
  'Journée 3 - R1 Auvergne Rhône Alpes (à 9) EST': matchesURL + '4511',
  'Journée 4 - R1 Auvergne Rhône Alpes (à 9) EST': matchesURL + '4512',
  'Journée 5 - R1 Auvergne Rhône Alpes (à 9) EST': matchesURL + '4513',
  'Journée 6 - R1 Auvergne Rhône Alpes (à 9) EST': matchesURL + '4514',
  'Journée 7 - R1 Auvergne Rhône Alpes (à 9) EST': matchesURL + '4515',
  'Journée 8 - R1 Auvergne Rhône Alpes (à 9) EST': matchesURL + '4516',
  'Journée 9 - R1 Auvergne Rhône Alpes (à 9) EST': matchesURL + '4517',
  'Journée 10 - R1 Auvergne Rhône Alpes (à 9) EST': matchesURL + '4518',
  
  'Demi-Finale - R1 Auvergne Rhône Alpes (à 9)': matchesURL + '4680',
  'Finale - R1 Auvergne Rhône Alpes (à 9)': matchesURL + '4692',



  'Journée 1 - R1 Bourgogne Franche-Comté (à 9)': matchesURL + '4504',
  'Journée 2 - R1 Bourgogne Franche-Comté (à 9)': matchesURL + '4505',
  'Journée 3 - R1 Bourgogne Franche-Comté (à 9)': matchesURL + '4506',
  'Journée 4 - R1 Bourgogne Franche-Comté (à 9)': matchesURL + '4507',
  'Journée 5 - R1 Bourgogne Franche-Comté (à 9)': matchesURL + '4508',
  // 'Demi-Finale - R1 Bourgogne Franche-Comté (à 9)': matchesURL + '',
  'Finale - R1 Bourgogne Franche-Comté (à 9)': matchesURL + '4702',



  'Journée 1 - R1 Hauts de France (à 9)': matchesURL + '4541',
  'Journée 2 - R1 Hauts de France (à 9)': matchesURL + '4542',
  'Journée 3 - R1 Hauts de France (à 9)': matchesURL + '4543',
  'Journée 4 - R1 Hauts de France (à 9)': matchesURL + '4544',
  'Journée 5 - R1 Hauts de France (à 9)': matchesURL + '4545',
  // 'Demi-Finale - R1 Hauts de France (à 9)': matchesURL + '',
  // 'Finale - R1 Hauts de France (à 9)': matchesURL + '47',



  'Journée 1 - R1 Ligue Sud (à 9)': matchesURL + '4569',
  'Journée 2 - R1 Ligue Sud (à 9)': matchesURL + '4570',
  'Journée 3 - R1 Ligue Sud (à 9)': matchesURL + '4571',
  'Journée 4 - R1 Ligue Sud (à 9)': matchesURL + '4572',
  'Journée 5 - R1 Ligue Sud (à 9)': matchesURL + '4573',
  'Journée 5 - R1 Ligue Sud (à 9)': matchesURL + '4574',
  'Journée 5 - R1 Ligue Sud (à 9)': matchesURL + '4596',
  // 'Demi-Finale - R1 Ligue Sud (à 9)': matchesURL + '',
  // 'Finale - R1 Ligue Sud (à 9)': matchesURL + '47',



  'Journée 1 - R1 Normandie (à 9)': matchesURL + '4554',
  'Journée 2 - R1 Normandie (à 9)': matchesURL + '4556',
  'Journée 3 - R1 Normandie (à 9)': matchesURL + '4558',
  'Journée 4 - R1 Normandie (à 9)': matchesURL + '4561',
  'Journée 5 - R1 Normandie (à 9)': matchesURL + '4563',
  'Journée 5 - R1 Normandie (à 9)': matchesURL + '4565',
  'Journée 5 - R1 Normandie (à 9)': matchesURL + '4567',
  'Demi-Finale - R1 Normandie (à 9)': matchesURL + '4678',
  'Finale - R1 Normandie (à 9)': matchesURL + '4701',
};

const Footus = () => {
  return (
    <div>
      <h1>Football Américain</h1>
      <h2>Choisis ton équipe</h2>
      <h3>D1 Elite</h3>
      <h3>D1 Elite</h3>
      <h3>D1 Elite</h3>
      <h3>D1 Elite</h3>
      <h3>D1 Elite</h3>
      <Ranking_footus urls={urls} />
      <Calendar_footus urls={urls_calendar} />
    </div>
  );
};

export default Footus;
