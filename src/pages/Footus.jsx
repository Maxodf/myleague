import React from 'react';
import Ranking_footus from '../components/ranking-footus';

const urls = {
  'D1 Elite': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1309',
  'D2 Casque d\'Or': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1311',
  'D3 Casque d\'Argent': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1317',
  'R1 Grand Est': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1457',
  'R1 Bretagne': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1454',
  'R1 Ile de France': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1463',
  'R1 Nouvelle Aquitaine': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1488',
  'R1 Auvergne Rhône Alpes (à 9)': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1450',
  'R1 Bourgogne Franche-Comté (à 9)': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1447',
  'R1 Hauts de France (à 9)': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1460',
  'R1 Ligue Sud (à 9)': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1470',
  'R1 Normandie (à 9)': 'https://www.fffa.org/wp-admin/admin-ajax.php?action=fffa_calendar_api_proxy&resource=rankings&args[]=1466'
};

const Footus = () => {
  return (
    <div>
      <h1>Football Américain</h1>
      <Ranking_footus urls={urls} />
    </div>
  );
};

export default Footus;
