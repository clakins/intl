// ONE ENTRY PER PROGRAM. To add one: copy an entry, edit, save. Image goes in img/<id>.jpg
// t: hs | college | work    g: eligible grades (hs only)    a: [min age, max age]    o:1 = open to any student
// m: '*' or list of majors: nav auto mech elec electr marine    f: 0 no, 1 partial/varies, 2 fully funded, 3 free service, 4 paid
// op/cl: application opens/closes (null = "check official site")    h:1 = featured in the presentation
const V=['Bervariasi','Varies'],YR=['1 tahun ajaran','1 school year'],US=['Amerika Serikat','United States'],JP=['Jepang','Japan'],CT=['Kontrak kerja','Work contract'];
const PROGRAMS=[
{id:'yes',t:'hs',g:[10],a:[14,17],m:'*',f:2,h:1,n:'Kennedy-Lugar YES',loc:US,d:YR,op:null,cl:null,u:'https://afs.or.id',
 s:['Setahun SMA di AS bersama keluarga angkat. Perlu nilai rata-rata min. 80.','A year at a U.S. high school with a host family. Minimum average grade 80.']},
{id:'kakehashi',t:'hs',g:[10],a:[15,18],m:'*',f:1,h:1,n:'ASIA Kakehashi',loc:JP,d:['±5 bulan','±5 months'],op:'Feb',cl:null,u:'https://afs.or.id',
 s:['Sekitar 5 bulan di SMA Jepang. Perlu dasar bahasa Jepang.','About 5 months at a Japanese high school. Basic Japanese required.']},
{id:'flex',t:'hs',g:[10,11],a:[14,17],m:'*',f:2,n:'FLEX',loc:US,d:YR,op:null,cl:null,u:'https://afs.or.id',
 s:['Setahun SMA di AS, didanai Departemen Luar Negeri AS. Ada tes bahasa Inggris.','A year at a U.S. high school, funded by the U.S. State Department. Includes an English test.']},
{id:'afs',t:'hs',g:[10,11],a:[15,17],m:'*',f:1,h:1,n:'AFS Year Program',loc:['Berbagai negara','Various countries'],d:YR,op:null,cl:null,u:'https://afs.or.id',
 s:['Setahun sekolah di luar negeri. Biaya dan beasiswa tergantung negara tujuan.','A school year abroad. Cost and scholarships depend on the destination.']},
{id:'stem',t:'hs',g:[10,11],a:[15,17],m:'*',f:1,n:'AFS Global STEM',loc:['Luar negeri (bervariasi)','Abroad (varies)'],d:['Daring + akademi','Online + academy'],op:'Fall 2026',cl:null,u:'https://www.afs.org',
 s:['Program STEM dan keberlanjutan: belajar daring plus akademi tatap muka di luar negeri.','STEM and sustainability: online learning plus an in-person academy abroad.']},
{id:'nus',t:'college',a:[17],m:'*',f:2,h:1,n:'NUS ASEAN Scholarship',loc:['Singapura','Singapore'],d:['4 tahun (S1)','4 years (undergrad)'],op:null,cl:null,u:'https://www.nus.edu.sg',
 s:['Kuliah S1 penuh di NUS. Ada kewajiban kerja di Singapura setelah lulus.','Full undergraduate degree at NUS. Includes a work obligation in Singapore after graduating.']},
{id:'eusa',t:'college',o:1,a:[14],m:'*',f:3,n:'EducationUSA',loc:['Online / Jakarta','Online / Jakarta'],d:['Sesi konsultasi','Advising sessions'],op:null,cl:null,u:'https://educationusa.state.gov',
 s:['Konsultasi gratis soal kuliah di AS: pendaftaran, bantuan dana, visa. Titik awal yang bagus.','Free advising on U.S. study: applications, financial aid, visas. A great place to start.']},
{id:'aus',t:'college',a:[21],m:['nav','marine','mech','elec','electr'],f:2,h:1,n:'Australia Awards',loc:['Australia','Australia'],d:['1–2 tahun (S2)','1–2 years (master’s)'],op:null,cl:'28 Apr 2027',u:'https://australiaawardsindonesia.org',
 s:['Beasiswa S2/S3 di Australia (perlu gelar S1 dulu). Prioritas termasuk maritim dan manufaktur.','Master’s/PhD scholarships in Australia (bachelor’s needed first). Priorities include maritime and manufacturing.']},
{id:'ssw',t:'work',a:[18],m:['mech','auto','elec','electr','marine'],f:1,h:1,n:'Japan SSW',loc:JP,d:CT,op:null,cl:null,u:'https://www.isa.go.jp/en/',
 s:['Visa pekerja terampil khusus di Jepang. Perlu tes bahasa Jepang dan tes keterampilan.','Specified Skilled Worker visa for Japan. Needs Japanese-language and skills tests.']},
{id:'ausb',t:'work',a:[18],m:['mech','auto','elec','electr'],f:4,h:1,n:'German Ausbildung',loc:['Jerman','Germany'],d:['2–3,5 tahun','2–3.5 years'],op:null,cl:null,u:'https://www.make-it-in-germany.com',
 s:['Pelatihan kejuruan berupah di Jerman: kerja plus sekolah. Perlu bahasa Jerman (sekitar B1).','Paid vocational training in Germany: work plus classes. German needed (around B1).']},
{id:'eps',t:'work',a:[18,39],m:['mech','auto','elec','electr'],f:4,n:'Korea EPS',loc:['Korea Selatan','South Korea'],d:CT,op:null,cl:null,u:'https://kp2mi.go.id',
 s:['Jalur resmi pemerintah ke pemerintah untuk kerja di Korea. Perlu lulus tes EPS-TOPIK.','Official government-to-government route to work in Korea. Requires passing EPS-TOPIK.']},
{id:'siskop',t:'work',a:[18],m:'*',f:3,n:'SISKOP2MI',loc:['Berbagai negara','Various countries'],d:V,op:null,cl:null,u:'https://siskop2mi.go.id',
 s:['Sistem resmi pemerintah untuk lowongan kerja luar negeri. Jangan bayar calo.','The government’s official system for overseas jobs. Never pay brokers.']},
{id:'ggl',t:'work',a:[18],m:'*',f:1,h:1,n:'SMK Go Global',loc:['Berbagai negara','Various countries'],d:V,op:null,cl:null,u:'https://kp2mi.go.id',
 s:['Pelatihan bahasa dan keterampilan untuk lulusan SMK sebelum kerja di luar negeri.','Language and skills training for SMK graduates before working abroad.']},
{id:'stcw',t:'work',a:[18],m:['nav','marine'],f:1,n:'STCW Pathway',loc:['Kapal internasional','International shipping'],d:V,op:null,cl:null,u:'https://www.imo.org',
 s:['Standar internasional pelaut: jalur menjadi awak dek atau kamar mesin di kapal dagang.','International seafarer standard: the route to deck or engine crew on merchant ships.']}
];
