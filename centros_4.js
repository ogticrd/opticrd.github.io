const centros = [
  {
    name: "SANTO DOMINGO ESTE",
    centers: [
      { name: "AYUNTAMIENTO SANTO DOMINGO ESTE" },
      { name: "CLUB EL ROSAL" },
      { name: "CLUB PLAN SOCIAL DE LOS BILLETEROS" },
      { name: "CENTRO DE PRIMER NIVEL DE ATENCIÓN VIETNAM" },
      { name: "DISPENSARIO MEDICO SANTA MARIA REINA" },
      { name: "ESCUELA PRIMARIA CELINA PELLIER" },
      { name: "ESTACION BOMBEROS CIVILES NO.2" },
      { name: "HOSPITAL DR DARIO CONTRERAS" },
      { name: "HOSPITAL MUNICIPAL RALMA" },
      { name: "JUMBO MEGACENTRO" },
      { name: "JUMBO SAN ISIDRO" },
      { name: "MULTIUSO URBANIZACION HAMARAP" },
      { name: "PARROQUIA SAN AGUSTIN" },
      { name: "MULTIUSO DE INVIVIENDA" },
      { name: "PARRROQUIA SANTO TOMAS VILLA NUEVA" },
    ],
  },
  {
    name: "SANTO DOMINGO NORTE",
    centers: [
      { name: "BIBLIOTECA MULTIUSO GUARICANO CENTRO" },
      { name: "ESCUELA BETANIA" },
      { name: "ESCUELA LEONCIO MANZUETA" },
      { name: "ESCUELA RAMON MATIAS MELLA" },
      { name: "ESCUELA SAN FELIPE" },
      { name: "HOGAR DE DÍA" },
      { name: "HOSPITAL NEY ARIAS LORA" },
      { name: "MULTIUSO LA VICTORIA" },
      { name: "MULTIUSO SABANA PERDIDA" },
      { name: "PARROQUIA SANTA CRUZ" },
      { name: "PLANTA CARIBE POLLO CIBAO" },
      { name: "RAMONA NERIS SOSA" },
      { name: "VESTIR DE HOY" },
    ],
  },
  {
    name: "DISTRITO NACIONAL",
    centers: [
      { name: "CENTRO DE PRIMER NIVEL SAN PEDRO APOSTOL" },
      { name: "CENTRO OLÍMPICO JUAN PABLO DUARTE (PABELLÓN DE COMBATE)" },
      { name: "CLUB LOS PRADOS" },
      { name: "CLUB MAURICIO BÁEZ" },
      { name: "CLUB NACO" },
      { name: "CLUB RAFAEL BARIAS" },
      { name: "CLUB SAN CARLOS" },
      { name: "COLEGIO SAN GABRIEL" },
      { name: "CONAPE" },
      { name: "CENTRO DE PRIMER NIVEL HONDURAS" },
      { name: "DISPENSARIO PARROQUIAL SAN GABRIEL" },
      { name: "FUNDACIÓN JUDEGU" },
      { name: "FUNSAZURZA" },
      { name: "HOSPITAL DOCENTE DR. FRANCISCO MOSCOSO PUELLO " },
      { name: "IINSTITUTO DE AUXILIO Y VIVIENDA (INAVI)" },
      { name: "JUMBO AGORA" },
      { name: "MINISTERIO DE TURISMO" },
      { name: "UNIBE" },
      { name: "PLAZA LAMA 27 DE FEBRERO" },
    ],
  },
  {
    name: "SANTO DOMINGO OESTE",
    centers: [
      { name: "CENTRO COMUNAL LAS PALMAS" },
      { name: "CENTRO DE PRIMER NIVEL LAS CAOBAS" },
      { name: "CLUB BANCO DE RESERVAS" },
      { name: "FUNDACION PEDRO MARTINEZ" },
      { name: "HOSPITAL MARCELINO VELEZ SANTANA" },
      { name: "HOSPITAL MUNICIPAL DE ENGOMBE" },
      { name: "MULTIUSO EL ABANICO" },
      {
        name:
          "PARROQUIA NUESTRA SEÑORA LA ALTAGRACIA/CENTRO DE PRIMER NIVEL DIAZ PIÑEYRO",
      },
      { name: "SANTO DOMINGO COUNTRY CLUB" },
      { name: "" },
    ],
  },
  {
    name: "SAN JUAN",
    centers: [
      { name: "CLUB COME MORO" },
      { name: "CODIA" },
      { name: "EL CASINO SJ" },
      { name: "PARQUE SÁNCHEZ" },
      { name: "SALÓN DE CONFERENCIA DIRECCION PROVINCIAL DE SALUD SAN JUAN" },
      { name: "UNIDAD DE ATENCION PRIMARIA BATISTA" },
      { name: "UNIDAD DE ATENCION PRIMARIA BOHECHIO" },
      { name: "UNIDAD DE ATENCION PRIMARIA BUENA VISTA DEL YAQUE" },
      { name: "UNIDAD DE ATENCION PRIMARIA CAPULIN" },
      { name: "UNIDAD DE ATENCION PRIMARIA DERRUMBADERO" },
      { name: "UNIDAD DE ATENCION PRIMARIA EL NARANJO" },
      { name: "UNIDAD DE ATENCION PRIMARIA JINOVA" },
      { name: "UNIDAD DE ATENCION PRIMARIA JORGILLO" },
      { name: "UNIDAD DE ATENCION PRIMARIA JUAN HERRERA" },
      { name: "UNIDAD DE ATENCION PRIMARIA LA ESTANCIA" },
      { name: "UNIDAD DE ATENCION PRIMARIA LA NAVAJA" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS CARTONES" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS GRINGOS" },
      { name: "UNIDAD DE ATENCION PRIMARIA MATAYAYA" },
      { name: "UNIDAD DE ATENCION PRIMARIA POZO HONDO" },
      { name: "UNIDAD DE ATENCION PRIMARIA VILLA CARMEN" },
    ],
  },
  {
    name: "MARIA TRINIDAD SANCHEZ",
    centers: [
      { name: "AYUNTAMIENTO DEL POZO" },
      { name: "AYUNTAMIENTO MUNICIPAL NAGUA" },
      { name: "CASA DE FORMACION SAGRADA FAMILIA" },
      { name: "CENTRO COMUNITARIO MATA BONITA" },
      { name: "CENTRO COMUNITARIO PAYITA" },
      { name: "CENTRO DE PRIMER NIVEL LA FACTORIA" },
      { name: "CENTRO DE PRIMER NIVEL LOS YAYALES" },
      { name: "CENTRO DE PRIMER NIVEL ABREU" },
      { name: "CENTRO DE PRIMER NIVEL BAOBA DEL PIÑAL" },
      { name: "CENTRO DE PRIMER NIVEL BEJUCO ALAMBRE" },
      { name: "CENTRO DE PRIMER NIVEL BOBITA" },
      { name: "CENTRO DE PRIMER NIVEL COPEYITO" },
      { name: "CENTRO DE PRIMER NIVEL EL GUAYABO" },
      { name: "CENTRO DE PRIMER NIVEL EL PAPAYO" },
      { name: "CENTRO DE PRIMER NIVEL EL YAYAL" },
      { name: "CENTRO DE PRIMER NIVEL LA CAPILLA" },
      { name: "CENTRO DE PRIMER NIVEL LAS CEJAS" },
      { name: "CENTRO DE PRIMER NIVEL LAS CORCOBAS" },
      { name: "CENTRO DE PRIMER NIVEL LAS GARZAS" },
      { name: "CENTRO DE PRIMER NIVEL LAS GORDAS" },
      { name: "CENTRO DE PRIMER NIVEL LOMA ALTA" },
      { name: "CENTRO DE PRIMER NIVEL SAN RAFAEL" },
      { name: "HOSPITAL DR. ANTONIO YAPOR HEDED" },
      { name: "HOSPITAL DR. CARLOS A. ZAFRA" },
      { name: "PARROQUIA SANTISIMA TRINIDAD" },
      { name: "POLIDEPORTIVO CABRERA" },
      { name: "POLIDEPORTIVO NAGUA" },
      { name: "POLIDEPORTIVO RIO SAN JUAN" },
    ],
  },
  {
    name: "SAMANA",
    centers: [
      { name: "AYUNTAMIENTO MUNICIPAL" },
      { name: "CENTRO COMUNAL (LOS CORRALES)" },
      { name: "CENTRO COMUNAL LOS COCOS" },
      { name: "CENTRO COMUNAL RANCHO ESPAÑOL" },
      { name: "CENTRO TECNOLOGICO COMUNITARIO DEL LIMÓN" },
      { name: "CLUB DE MADRE LOS PUENTES" },
      { name: "CRUCE DE TEZÓN" },
      { name: "FABRICA DE HIELO (PASCUALA)" },
      { name: "HONDURAS SANTA BARBARA" },
      { name: "HOSPITAL DR. ALBERTO GAUTREAUX" },
      { name: "IGLESIA CATÓLICA (RINCON)" },
      { name: "IGLESIA CATOLICA LAS GARITAS" },
      { name: "JUNTA DE VECINOS DANIEL WILMORE" },
      { name: "JUNTA DE VECINOS JUANA VICENTA" },
      { name: "JUNTA DISTRITAL LAS GALERAS" },
      { name: "LOS CACAOS" },
      { name: "POLIDEPORTIVO SAMANA CENTRO" },
      { name: "SINDICATO DE LA PORTUARIA" },
      { name: "VILLA CLARA " },
    ],
  },
  {
    name: "PUERTO PLATA",
    centers: [
      { name: "AYUNTAMIENTO DE CABARETE" },
      { name: "AYUNTAMIENTO DE SOSUA" },
      { name: "CENTRO DE PRIMER NIVEL DOLORES DE LA CRUZ" },
      { name: "CENTRO DE PRIMER NIVEL NAVAS" },
      { name: "DIRECCION PROVINCIAL DE SALUD DE PUERTO PLATA" },
      { name: "HOSPITAL MUNICIPAL DE ALTAMIRA" },
      { name: "HOSPITAL MUNICIPAL DE GUANANICO" },
      { name: "HOSPITAL MUNICIPAL DE IMBERT" },
      { name: "HOSPITAL MUNICIPAL DE LOS HIDALGOS" },
      { name: "HOSPITAL MUNICIPAL DE VILLA ISABELA" },
      { name: "IGLESIA EL SHADDAI" },
      { name: "PLAY DEL SECTOR PADRE LAS CASAS" },
    ],
  },
  {
    name: "LA ROMANA",
    centers: [
      { name: "CENTRO DIAGNOSTICO CALETA" },
      { name: "DIRECCION PROVINCIAL DE SALUD DE LA ROMANA" },
      { name: "ECOLAB ZONA  FRANCA  2" },
      { name: "GOBERNACIÓN PROVINCIAL" },
      { name: "HOGAR DEL NIÑO " },
      { name: "HOSPITAL ARÍSTIDES FIALLO CABRAL" },
      { name: "HOSPITAL GUAYMATE" },
      { name: "HOSPITAL MATERNO INFANTIL DR. FRANCISCO A. GONZALVO" },
      { name: "HOSPITAL SAMARITANO" },
      { name: "IGLESIA MARANAHTA." },
      { name: "IGLESIA PENTECOSTAL MI VILLA NAZARET" },
      { name: "IGLESIA SANTA ROSA DE LIMA" },
      { name: "POLICLINICO DUARTE" },
      { name: "POLIDEPORTIVO LA ROMANA" },
      {
        name: "UNIDAD DE ATENCION PRIMARIA ANTITUBERCULOSO DR. LUIS J. SUAREZ",
      },
      { name: "UNIDAD DE ATENCION PRIMARIA CALETA" },
      { name: "UNIDAD DE ATENCION PRIMARIA CUCAMA" },
      { name: "UNIDAD DE ATENCION PRIMARIA ESCUELA PAULINA JIMENEZ" },
      { name: "UNIDAD DE ATENCION PRIMARIA PIEDRA LINDA" },
      { name: "UNIDAD DE ATENCION PRIMARIA TOMAS DESIR LEBRON" },
    ],
  },
  {
    name: "PEDERNALES",
    centers: [
      { name: "HOSPITAL PROVINCIAL DR ELIO FIALLO" },
      { name: "UNIDAD DE ATENCION PRIMARIA  5 Y 6" },
      { name: "UNIDAD DE ATENCION PRIMARIA  9" },
      { name: "UNIDAD DE ATENCION PRIMARIA 3 Y 4" },
      { name: "UNIDAD DE ATENCION PRIMARIA 7 Y 8" },
    ],
  },
  {
    name: "BARAHONA",
    centers: [
      { name: "CLUB DE CACHON" },
      { name: "MULTIUSO DE CABRAL" },
      { name: "MULTIUSO DE POLO " },
      { name: "MULTIUSO PARAÍSO" },
      { name: "UNIDAD DE ATENCION PRIMARIA CANOA" },
      { name: "UNIDAD DE ATENCION PRIMARIA FONDO NEGRO" },
      { name: "UNIDAD DE ATENCION PRIMARIA INVI-CEA" },
      { name: "UNIDAD DE ATENCION PRIMARIA LA CIENAGA" },
      { name: "UNIDAD DE ATENCION PRIMARIA LAS SALINAS" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS BLANCOS" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS PATOS" },
    ],
  },
  {
    name: "SANTIAGO",
    centers: [
      { name: "ACERO ESTRELLA Y BOTICA" },
      { name: "AYUNTAMIENTO " },
      { name: "CENTRO DE LA CIUDAD (PARQUE) VILLA GONZALEZ" },
      { name: "CENTRO DE PRIMER NIVEL YAGUITA DEL PASTOR" },
      { name: "CENTRO MÉDICO CIBAO- UTESA" },
      { name: "CIENFUEGOS (BAJO TECHO)" },
      { name: "CLÍNICA UNIÓN MÉDICA DEL NORTE" },
      { name: "CLUB MAMBUICHE" },
      { name: "CLUB VILLA OLGA" },
      { name: "CORAASAN" },
      { name: "CENTRO DE PRIMER NIVEL BEJUCAL" },
      { name: "CENTRO DE PRIMER NIVEL BELLA VISTA" },
      { name: "CENTRO DE PRIMER NIVEL DON JUAN" },
      { name: "CENTRO DE PRIMER NIVEL JANEY " },
      { name: "CENTRO DE PRIMER NIVEL LA CANELA " },
      { name: "CENTRO DE PRIMER NIVEL LA CUESTA" },
      { name: "CENTRO DE PRIMER NIVEL LAS MANACLAS" },
      { name: "CENTRO DE PRIMER NIVEL LAS PLACETAS" },
      { name: "CENTRO DE PRIMER NIVEL LOS GUANDULES" },
      { name: "CENTRO DE PRIMER NIVEL LOS MONTONES " },
      { name: "CENTRO DE PRIMER NIVEL PEDREGAL " },
      { name: "CENTRO DE PRIMER NIVEL PILONES " },
      { name: "CENTRO DE PRIMER NIVEL PINALITO" },
      { name: "CENTRO DE PRIMER NIVEL PLATANAL" },
      { name: "CENTRO DE PRIMER NIVEL RINCON DE PIEDRA" },
      { name: "CENTRO DE PRIMER NIVEL VILLA BAO" },
      { name: "CENTRO DE PRIMER NIVEL VILLA LIBERACION " },
      { name: "CENTRO DE PRIMER NIVEL VILLA TABACALERA" },
      { name: "ENSANCHE LIBERTAD (GUG)" },
      { name: "GRAN TEATRO DEL CIBAO" },
      { name: "HEMMI" },
      { name: "HOSPITAL MUNICIPAL DE SAJOMA" },
      { name: "HOSPITAL CABRAL Y BAEZ " },
      { name: "HOSPITAL ESTRELLA UREÑA" },
      { name: "HOSPITAL IRENE FERNÁNDEZ JÁNICO" },
      { name: "HOSPITAL LUIS ESPAILLAT SABANA IGLESIA" },
      { name: "HOSPITAL REGIONAL UNIVERSITARIO ARTURO GRULLON" },
      { name: "HP BELLA VISTA" },
      { name: "HP HATO DEL YAQUE" },
      { name: "LICEO EUGENIO DE JESUS MARCANO (TAMBORIL)" },
      { name: "LICEO EUGENIO DE JS MARCANO (TAMBORIL)" },
      { name: "MEDICA" },
      { name: "OMSA CLUB NOEL LOS SALADOS" },
      { name: "PALACIO DE JUSTICIA" },
      { name: "PARQUE CENTRAL" },
      { name: "PUCMM - SANTIAGO" },
      { name: "DIRECCIÓN REGIONAL DE SALUD" },
      { name: "TECHADO LOS CIRUELITOS " },
      { name: "TIPIQUITO LOS COCOS " },
      { name: "UASD BARRANQUITA" },
      { name: "UNIVERSIDAD NAPOLEON NUNEZ MOLINA (LICEY)" },
      { name: "INTELLISYS" },
    ],
  },
  {
    name: "BAHORUCO",
    centers: [
      { name: "DIRECCION PROVINCIAL DE SALUD DE BAHORUCO NEYBA" },
      { name: "MULTIUSO NEYBA" },
      { name: "UNIDAD DE ATENCIÓN PRIMARIA EL SALADO GALVAN" },
      { name: "UNIDAD DE ATENCIÓN PRIMARIA TAMAYO" },
      { name: "UNIDAD DE ATENCION PRIMARIA ALTAMIRA" },
      { name: "UNIDAD DE ATENCION PRIMARIA BATEY 2" },
      { name: "UNIDAD DE ATENCION PRIMARIA BATEY 6" },
      { name: "UNIDAD DE ATENCION PRIMARIA CABEZA DE TORO" },
      { name: "UNIDAD DE ATENCION PRIMARIA EL PALMAR" },
      { name: "UNIDAD DE ATENCION PRIMARIA SANTANA" },
      { name: "UNIDAD DE ATENCION PRIMARIA UVILLA" },
    ],
  },
  {
    name: "SANTIAGO RODRIGUEZ",
    centers: [
      { name: "AYUNTAMIENTO MUNICIPAL MONCIÓN" },
      { name: "ESCUELA ANA JOAQUIN HIDALGO" },
      { name: "ESCUELA LAS CAOBA" },
      { name: "LOS BOMBEROS" },
    ],
  },
  {
    name: "SAN CRISTOBAL",
    centers: [
      { name: "ASOCIACION DE INDUSTRIA" },
      { name: "CENTRO DIAGNOSTICO VILLA FUNDACION" },
      { name: "COLEGIO SAN RAFAEL" },
      { name: "COMEDOR ECONOMICO LAVA PIE" },
      { name: "CENTRO DE PRIMER NIVEL CONANI" },
      { name: "CENTRO DE PRIMER NIVEL EL CAJUILITO" },
      { name: "CENTRO DE PRIMER NIVEL EL CARRIL" },
      { name: "CENTRO DE PRIMER NIVEL LA PARED" },
      { name: "CENTRO DE PRIMER NIVEL LA PISCINA" },
      { name: "CENTRO DE PRIMER NIVEL MODESTO OGANDO (LAS FLORES)" },
      { name: "CENTRO DE PRIMER NIVEL PUEBLO NUEVO" },
      { name: "CENTRO DE PRIMER NIVEL PUERTO RICO" },
      { name: "CENTRO DE PRIMER NIVEL SAN ANTONIO" },
      { name: "HOSPITAL JUAN PABLO PINA" },
      { name: "HOSPITAL M. VILLA ALTAGRACIA" },
      { name: "HOSPITAL MUNICIPAL HAINA" },
      { name: "HOSPITAL RAFAEL J. MAÑÓN" },
      { name: "PARQUE RADHAMES" },
      { name: "UNIDAD DE ATENCION PRIMARIA SABANETA " },
    ],
  },
  {
    name: "SAN JOSE DE OCOA",
    centers: [
      { name: "CENTRO DE DIAGNÓSTICO BELLA VISTA" },
      { name: "CENTRO DE SALUD  ARROYO CANA" },
      { name: "CENTRO DE SALUD  LA CIENEGA" },
      { name: "CENTRO DE SALUD  LAS FLORES" },
      { name: "CENTRO DE SALUD  LOS MARTINEZ" },
      { name: "CENTRO DE SALUD  LOS RACHITOS" },
      { name: "CENTRO DE SALUD  PUEBLO A BAJO" },
      { name: "CENTRO DE SALUD  SAN ANTONIO" },
      { name: "CENTRO DE SALUD  SAN LUIS " },
      { name: "CENTRO DE SALUD EL PINAR" },
      { name: "CENTRO DE SALUD LIMONAL" },
      { name: "CENTRO DE SALUD NARANJAL" },
      { name: "CENTRO DE SALUD SABANA LARGA ABAJO" },
      { name: "CENTRO DE SALUD SAN RAFAEL" },
      { name: "HOSPITAL GUARIONEX ALCANTARA" },
    ],
  },
  {
    name: "ESPAILLAT",
    centers: [
      { name: "CLUB CASINO RENACIMIENTO" },
      { name: "CLUB JOSE HORACIO RODRIGUEZ" },
      { name: "CLUB LIBERTAD GASPAR HERNANDEZ" },
      { name: "CLUB MUNICIPAL JAMAO AL NORTE" },
      { name: "CLUB RECREATIVO" },
      { name: "CLUB RECREATIVO " },
      { name: "CMD FILIAL MOCA" },
      { name: "CENTRO DE PRIMER NIVEL ALGARROBO" },
      { name: "CENTRO DE PRIMER NIVEL BATEY GINEBRA" },
      { name: "CENTRO DE PRIMER NIVEL BONAGUA" },
      { name: "CENTRO DE PRIMER NIVEL BORRA FERREA" },
      { name: "CENTRO DE PRIMER NIVEL CANCA LA REYNA" },
      { name: "CENTRO DE PRIMER NIVEL CEIBA DE MADERA" },
      { name: "CENTRO DE PRIMER NIVEL CUERO DURO" },
      { name: "CENTRO DE PRIMER NIVEL DE GUAUCI" },
      { name: "CENTRO DE PRIMER NIVEL EL CAIMITO" },
      { name: "CENTRO DE PRIMER NIVEL EL COROZO" },
      { name: "CENTRO DE PRIMER NIVEL EL HIGUERITO" },
      { name: "CENTRO DE PRIMER NIVEL JOBA ARRIBA" },
      { name: "CENTRO DE PRIMER NIVEL JUAN LOPEZ" },
      { name: "CENTRO DE PRIMER NIVEL LA ERMITA" },
      { name: "CENTRO DE PRIMER NIVEL LA GUAZUMA" },
      { name: "CENTRO DE PRIMER NIVEL LA ISLETA" },
      { name: "CENTRO DE PRIMER NIVEL LA MANZANA" },
      { name: "CENTRO DE PRIMER NIVEL LA YAGUA" },
      { name: "CENTRO DE PRIMER NIVEL LAS FLORES" },
      { name: "CENTRO DE PRIMER NIVEL LAS GUAZUMAS" },
      { name: "CENTRO DE PRIMER NIVEL LAS LAGUNAS " },
      { name: "CENTRO DE PRIMER NIVEL LOS BRAZOS" },
      { name: "CENTRO DE PRIMER NIVEL LOS LOPEZ" },
      { name: "CENTRO DE PRIMER NIVEL LOS PANCHOS" },
      { name: "CENTRO DE PRIMER NIVEL LOS PUENTES" },
      { name: "CENTRO DE PRIMER NIVEL MANUEL DE RODRIGUEZ" },
      { name: "CENTRO DE PRIMER NIVEL MONTE DE LA JAGUA " },
      { name: "CENTRO DE PRIMER NIVEL NUEVO PUERTO RICO" },
      { name: "CENTRO DE PRIMER NIVEL PALMA HERRADA" },
      { name: "CENTRO DE PRIMER NIVEL QUEBRADA HONDA" },
      { name: "CENTRO DE PRIMER NIVEL REPARADERO" },
      { name: "CENTRO DE PRIMER NIVEL SAL SI PUEDES" },
      { name: "CENTRO DE PRIMER NIVEL SAN FRANCISCO ARRIBA" },
      { name: "CENTRO DE PRIMER NIVEL SAN VICTOR" },
      { name: "CENTRO DE PRIMER NIVEL SANTA ROSA MOCA" },
      { name: "CENTRO DE PRIMER NIVEL TIERRA DURA" },
      { name: "CENTRO DE PRIMER NIVEL VERAGUA" },
      { name: "CENTRO DE PRIMER NIVEL VIEJO PUERTO RICO" },
      { name: "CENTRO DE PRIMER NIVEL VILLA CAFETALERA" },
      { name: "CENTRO DE PRIMER NIVEL VILLA PROGRESO" },
      { name: "CENTRO DE PRIMER NIVEL ZAFARRAYA" },
      { name: "DISTRITO ESCOLAR 06-01 JOSE CONTRERAS" },
      { name: "ESCUELA LOS RINCONES" },
      { name: "HOSPITAL JOSÉ CONTRERAS" },
      { name: "POLIDEPORTIVO DE MOCA" },
      { name: "SALON DE ACTIVIDADES BARRIO LA ESTELA" },
    ],
  },
  {
    name: "DUARTE",
    centers: [
      { name: "CAPILLA LA ALTAGRACIA" },
      { name: "CENTRO COMUNAL DE CASTILLO" },
      { name: "CENTRO DE VACUNACION SIGLO 21" },
      { name: "CENTRO MÉDICO DOCTOR OVALLE" },
      { name: "CLUB BLUE" },
      { name: "ESCUELA GREGORIO LUPERÓN VISTA AL VALLE" },
      { name: "MULTIUSO ARENA  57" },
      { name: "MULTIUSO ARENOSO" },
      { name: "MULTIUSO BAJO TECHO VILLA RIVAS" },
      { name: "UASD" },
    ],
  },
  {
    name: "DAJABON",
    centers: [
      { name: "CASA DE LA CULTURA" },
      { name: "POLI DEPORTIVO AMBRIOSO ESTEVEZ" },
      { name: "POLI DEPORTIVO AMBROSIO ESTÉVEZ" },
    ],
  },
  {
    name: "PERAVIA",
    centers: [
      { name: "24 DE ABRIL" },
      { name: "ARROYO HONDO" },
      { name: "CENTRO DE PRIMER NIVEL BOCA CANASTA" },
      { name: "BUENAS NUEVAS" },
      { name: "CAÑAFISTOL ABAJO" },
      { name: "CENTRO COMUNAL SANTA CRUZ" },
      { name: "CENTRO DE SALUD MAXIMO GOMEZ" },
      { name: "CONSULTORIO MEDICO EL MANI" },
      { name: "CENTRO DE PRIMER NIVEL PAYA" },
      { name: "CENTRO DE PRIMER NIVEL VILLA SOMBRERO" },
      { name: "DON GREGORIO I" },
      { name: "EL CARRETON" },
      { name: "EL LIMONAL" },
      { name: "EL LLANO" },
      { name: "ESCONDIDO I" },
      { name: "FUNDACION DE PERAVIA I" },
      { name: "FUNDACION DE PERAVIA II" },
      { name: "LAS BARIAS" },
      { name: "LAS CALDERAS" },
      { name: "LAS CARRERAS" },
      { name: "LAS TABLAS" },
      { name: "LOS TUMBAOS" },
      { name: "LOS YAGUARIZOS" },
      { name: "MATA GORDA" },
      { name: "MATANZAS ARRIBA" },
      { name: "PIZARRETE I" },
      { name: "PIZARRETE II" },
      { name: "QUIJA QUIETA" },
      { name: "RIO ARRIBA" },
      { name: "ROSA NOVA" },
      { name: "SANTA ROSA 1" },
      { name: "SANTA ROSA 2" },
      { name: "SAONA I" },
      { name: "VALDESIA" },
      { name: "VILLA DAVID" },
      { name: "VILLA GUERA" },
      { name: "VILLA MAJEGA I" },
      { name: "VILLA MAJEGA II" },
      { name: "VILLA SOMBRERO 1" },
    ],
  },
  {
    name: "LA ALTAGRACIA",
    centers: [
      { name: "AEROPUERTO PUNTA CANA" },
      { name: "UNIDAD DE ATENCION PRIMARIA BAYAHIBE" },
      { name: "UNIDAD DE ATENCION PRIMARIA BOCA DE YUMA" },
    ],
  },
  {
    name: "AZUA",
    centers: [
      { name: "CENTRO DE DIAGNOSTICO AZUA" },
      { name: "CENTRO DE SALUD FINCA 6" },
      { name: "CLINICA RURAL AMIAMA GOMEZ" },
      { name: "CLINICA RURAL BARRERAS" },
      { name: "CLINICA RURAL EL CARRIZAL" },
      { name: "CLINICA RURAL EL ROSARIO" },
      { name: "CLINICA RURAL ESTEBANIA" },
      { name: "CLINICA RURAL HATILLO" },
      { name: "CLINICA RURAL HATO NUEVO" },
      { name: "CLINICA RURAL LA SIEMBRA" },
      { name: "CLINICA RURAL LAS BARIAS" },
      { name: "CLINICA RURAL LAS CHARCAS" },
      { name: "CLINICA RURAL LAS LAGUNAS" },
      { name: "CLINICA RURAL LOS NEGROS" },
      { name: "CLINICA RURAL LOS TOROS" },
      { name: "CLINICA RURAL MAGUEYAL" },
      { name: "CLINICA RURAL MONTE BONITO" },
      { name: "CLINICA RURAL PALMAR DE OCOA" },
      { name: "CLINICA RURAL PROYECTO 4" },
      { name: "CLINICA RURAL PROYECTO-2-C" },
      { name: "CLINICA RURAL PUEBLO VIEJO" },
      { name: "CLINICA RURAL SABANA YEGUA" },
      { name: "CLINICA RURAL SAJANOA" },
      { name: "CLINICA RURAL TABARA ABAJO" },
      { name: "CLINICA RURAL TABARA ARRIBA" },
      { name: "HOSPITAL MUNICIPAL GUAYABAL" },
      { name: "HOSPITAL TAIWAN" },
      { name: "LICEO JOSE FRANCISCO BOBADILLA" },
      { name: "GOBERNACIÓN" },
      { name: "UNIDAD DE ATENCIÓN PRIMARIA LA BOMBITA" },
      { name: "UNIDAD DE ATENCION PRIMARIA CAÑITA -A" },
      { name: "UNIDAD DE ATENCION PRIMARIA EL BARRO" },
      { name: "UNIDAD DE ATENCION PRIMARIA EL HIGUERO" },
      { name: "UNIDAD DE ATENCION PRIMARIA GANADERO BARRIO LOS TECNICOS" },
      { name: "UNIDAD DE ATENCION PRIMARIA LAS YAYAS ARRIBA" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS JOBOS -1" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS JOBOS -2" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS MONTES FRIOS" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS PARCELEROS" },
      { name: "UNIDAD DE ATENCION PRIMARIA SANTA ANA" },
      { name: "UNIDAD DE ATENCION PRIMARIA VILLA CORAZON DE JESUS" },
      { name: "UNIDAD DE ATENCION PRIMARIA VILLA OCOA" },
    ],
  },
  {
    name: "EL SEIBO",
    centers: [
      { name: "AYUNTAMIENTO MUNICIPAL" },
      { name: "CASA CLUB DE GINANDIANA" },
      { name: "CENTRO CAMPESINO" },
      { name: "CENTRO TECNOLOGICO COMUNITARIO (CTC) (MICHES)" },
      { name: "DEFENSA CIVIL" },
      { name: "HOSPITAL DOCTOR TEOFILO HERNADEZ" },
    ],
  },
  {
    name: "ELIAS PIÑA",
    centers: [
      { name: "CENTRO DE PRIMER NIVEL HATO VIEJO" },
      { name: "CENTRO DE PRIMER NIVEL LA GALLERA" },
      { name: "CENTRO DE PRIMER NIVEL LAS DELICIAS" },
      { name: "CENTRO DE PRIMER NIVEL MACASÍAS" },
      { name: "CENTRO DE PRIMER NIVEL PINZON" },
      { name: "CENTRO DE PRIMER NIVEL POTROSO" },
      { name: "CENTRO DE PRIMER NIVEL RINCONCITOS" },
      { name: "CENTRO DE PRIMER NIVEL SABANA HIGUERO" },
      { name: "CENTRO DE PRIMER NIVEL SABANA MULA" },
      { name: "CENTRO DE PRIMER NIVEL DE JUAN SANTIAGO" },
      { name: "CENTRO DE PRIMER NIVEL EL LLANO" },
      { name: "CENTRO DE PRIMER NIVEL GUANITO " },
      { name: "CENTRO DE PRIMER NIVEL GUAYABO" },
      { name: "CENTRO DE PRIMER NIVEL LAS PALMAS " },
      { name: "CENTRO DE PRIMER NIVEL PEDRO SANTANA " },
      { name: "CENTRO DE PRIMER NIVEL RANCHO DE LA GUARDIA " },
      { name: "CENTRO DE PRIMER NIVEL SABANA CRUZ" },
      { name: "CENTRO DE PRIMER NIVEL SABANA LARGA" },
      { name: "CENTRO TECNÓLOGICO COMUNITARIO (JUAN SANTIAGO)" },
      { name: "CENTRO TECNÓLOGICO COMUNITARIO (COMENDADOR)" },
      { name: "HOGAR DE ANCIANO SAN ISIDRO LABRADOR " },
      { name: "HOSPITAL DE HONDO VALLE " },
      { name: "HOSPITAL ROSA DUARTE" },
      { name: "POLIDEPORTIVO (HONDO VALLE)" },
      { name: "POLIDEPORTIVO  BANICA " },
    ],
  },
  {
    name: "INDEPENDENCIA",
    centers: [
      { name: "CENTRO DE PRIMER NIVEL BATEY 8" },
      { name: "CENTRO DE PRIMER NIVEL BOCA DE CACHON" },
      { name: "CENTRO DE PRIMER NIVEL COLONIA MIXTA" },
      { name: "CENTRO DE PRIMER NIVEL SAN JOSE" },
      { name: "CENTRO DIAGNÓSTICO." },
      { name: "CENTRO DE PRIMER NIVEL ANGOSTURA." },
      { name: "CENTRO DE PRIMER NIVEL BARTOLOMÉ" },
      { name: "CENTRO DE PRIMER NIVEL CRISTÓBAL." },
      { name: "CENTRO DE PRIMER NIVEL EL GUAYABAL." },
      { name: "CENTRO DE PRIMER NIVEL EL LIMÓN." },
      { name: "CENTRO DE PRIMER NIVEL JIMANI CENTRO." },
      { name: "CENTRO DE PRIMER NIVEL JIMANI VIEJO. BARRIO JIMANI VIEJO." },
      { name: "CENTRO DE PRIMER NIVEL LA DESCUBIERTA." },
      { name: "CENTRO DE PRIMER NIVEL LAS BAITOAS." },
      { name: "CENTRO DE PRIMER NIVEL LAS MERCEDES." },
      { name: "CENTRO DE PRIMER NIVEL LOS BOLOS." },
      { name: "CENTRO DE PRIMER NIVEL LOS PINOS DEL EDÉN." },
      { name: "CENTRO DE PRIMER NIVEL MELLA" },
      { name: "CENTRO DE PRIMER NIVEL POSTRER RÍO." },
      { name: "CENTRO DE PRIMER NIVEL PUESTO ESCONDIDO" },
      { name: "CENTRO DE PRIMER NIVEL SAN ISIDRO." },
      { name: "CENTRO DE PRIMER NIVEL TIERRA NUEVA." },
      { name: "CENTRO DE PRIMER NIVEL VENGAN A VER." },
      { name: "HOSPITAL GENERAL MELENCIANO" },
      { name: "HOSPITAL JOSE PEREZ" },
    ],
  },
  {
    name: "HERMANAS MIRABAL",
    centers: [
      { name: "CENTRO COMUNAL RANCHO ARRIBA" },
      { name: "POLIDEPORTIVO" },
    ],
  },
  {
    name: "MONTE PLATA",
    centers: [
      { name: "CENTRO DE PRIMER NIVEL CHACARO" },
      { name: "CENTRO DE PRIMER NIVEL HATO VIEJO" },
      { name: "CENTRO DE PRIMER NIVEL LOS BOTADOS" },
      { name: "CENTRO DE PRIMER NIVEL SAN ANTONIO" },
      { name: "ESCUELA MERIÑO" },
      { name: "HOSPITAL MUNICIPAL DE YAMASA" },
      { name: "UNIDAD DE ATENCION PRIMARIA DON JUAN" },
    ],
  },
  {
    name: "SANCHEZ RAMIREZ",
    centers: [
      { name: "AYUNTAMIENTO DE QUITA SUEÑO" },
      { name: "CENTRO DE DIAGNOSTICO" },
      { name: "CENTRO DE DIAGNOSTICO FANTINO" },
      { name: "CENTRO DE PRIMER LA CUEVA" },
      { name: "CENTRO DE PRIMER NIVEL CABALLERO" },
      { name: "CENTRO DE PRIMER NIVEL CASTILLO" },
      { name: "CENTRO DE PRIMER NIVEL CHACUEY" },
      { name: "CENTRO DE PRIMER NIVEL COMEDERO ARRIBA" },
      { name: "CENTRO DE PRIMER NIVEL CRUZ DE ANGELINA" },
      { name: "CENTRO DE PRIMER NIVEL DUEY" },
      { name: "CENTRO DE PRIMER NIVEL EL LIMONCITO" },
      { name: "CENTRO DE PRIMER NIVEL EL PESCOZON" },
      { name: "CENTRO DE PRIMER NIVEL HERNANDO ALONZO" },
      { name: "CENTRO DE PRIMER NIVEL LA ALTAGRACIA" },
      { name: "CENTRO DE PRIMER NIVEL LA BIJA" },
      { name: "CENTRO DE PRIMER NIVEL LA CRUZ" },
      { name: "CENTRO DE PRIMER NIVEL SABALLO" },
      { name: "CENTRO DE PRIMER NIVEL SIERRA PRIETA" },
      { name: "CLÍNICA NUESTRA SEÑORA DEL PILAR" },
      { name: "DISTRITO ESCOLAR 16-01" },
      { name: "HOSPITAL DE VILLA LA MATA" },
      { name: "HOSPITAL DR. RAMON BAEZ" },
      { name: "HOSPITAL INMACULADA CONCEPCION" },
      { name: "LOS COROZOS" },
      { name: "PARQUE DUARTE" },
    ],
  },
  {
    name: "VALVERDE",
    centers: [
      { name: "CLINICA MONTESINO" },
      { name: "CLUB DE LEONES" },
      { name: "CLUB ROTARIO" },
      { name: "COLEGIO MEDICO" },
      { name: "PARROQUIA MARÍA AUXILIADORA MAO" },
    ],
  },
  {
    name: "HATO MAYOR",
    centers: [
      { name: "HOSPITAL SEÑORA ELUPINA CORDERO" },
      { name: "UNIDAD DE ATENCION PRIMARIA LAS CAÑITAS" },
      { name: "UNIDAD DE ATENCION PRIMARIA LAS GUAMAS" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS HATILLOS" },
      { name: "UNIDAD DE ATENCION PRIMARIA MANCHADO" },
      { name: "UNIDAD DE ATENCION PRIMARIA PUERTO RICO" },
      { name: "UNIDAD DE ATENCION PRIMARIA PUNTA DE GARZA" },
      { name: "UNIDAD DE ATENCION PRIMARIA VILLA CANTO" },
      { name: "UNIDAD DE ATENCION PRIMARIA VILLA NAVARRO" },
      { name: "UNIDAD DE ATENCION PRIMARIA VILLA ORTEGA" },
      { name: "UNIDAD DE ATENCION PRIMARIA LA JAVILLA" },
      { name: "UNIDAD DE ATENCION PRIMARIA LAS YAGUITAS" },
    ],
  },
  {
    name: "MONSEÑOR NOUEL",
    centers: [
      { name: "CLINICA POLICLINICO BONAO" },
      { name: "CLUB LOS AMAPOLOS" },
      { name: "CRUCE UASD BONAO" },
      { name: "DISTRITO MUNICIPAL JUMA BEJUCAL" },
      { name: "DISTRITO MUNICIPAL LOS QUEMADOS" },
      { name: "DISTRITO MUNICIPAL SONADOR" },
      { name: "FALCONDO" },
      { name: "HOSPITAL DR. JOSE A. COLUMNA" },
      { name: "HOSPITAL MUNICIPAL DE MAIMON" },
      { name: "HOSPITAL MUNICIPAL PIEDRA BLANCA" },
      { name: "IGLESIA SAN PEDRO SAN PABLO" },
      { name: "UNIDAD DE ATENCION PRIMARIA MAXIMO GOMEZ" },
      { name: "UNIDAD DE ATENCION PRIMARIA SABANA DEL PUERTO" },
      { name: "UNIDAD DE ATENCION PRIMARIA JUMA" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS ARROCES" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS QUEMADOS" },
      { name: "UNIDAD DE ATENCION PRIMARIA NUESTRA SRA DE FATIMA" },
      { name: "UNIDAD DE ATENCION PRIMARIA RINCON DE YUBOA" },
    ],
  },
  {
    name: "SAN PEDRO DE MACORIS",
    centers: [
      { name: "CAPILLA SAGRADO CORAZON DE JESUS" },
      { name: "CLINICA DOCTOR DE LEON" },
      { name: "CLUB 26 DE FEBRERO" },
      { name: "DEFENSA CIVIL" },
      { name: "DIRECCION PROVINCIAL DE SALUD DE SAN PEDRO DE MACORIS" },
      { name: "GOBERNACION PROVINCIAL" },
      { name: "IGLESIA ASAMBLEA DE DIOS JUAN DOLIÓ" },
      { name: "IGLESIA CATOLICA LOS CONUCOS" },
      { name: "IGLESIA CIRCULO DE ORACION" },
      { name: "IGLESIA DE DIOS GUAYACANES" },
      { name: "IGLESIAS ASAMBLEAS DE DIOS ADONAI" },
      { name: "LOCAL DE LOS BOMBEROS" },
      { name: "LOCAL DE LOS MUELLEROS" },
      { name: "MONTE DE SION" },
      { name: "MULTIUSO - EXTENSION UASD" },
      { name: "UCE" },
    ],
  },
  {
    name: "LA VEGA",
    centers: [
      { name: "CENTRO DE DIAGNOSTICO" },
      { name: "CENTRO DE PRIMER NIVEL ARROYO ARRIBA" },
      { name: "CENTRO DE PRIMER NIVEL BAYACANES" },
      { name: "CENTRO DE PRIMER NIVEL BUENA VISTA" },
      { name: "CENTRO DE PRIMER NIVEL BURENDE" },
      { name: "CENTRO DE PRIMER NIVEL EL BALCON" },
      { name: "CENTRO DE PRIMER NIVEL EL CERCADO" },
      { name: "CENTRO DE PRIMER NIVEL EL MAMEY" },
      { name: "CENTRO DE PRIMER NIVEL GUACO" },
      { name: "CENTRO DE PRIMER NIVEL HATILLO" },
      { name: "CENTRO DE PRIMER NIVEL JUMUNUCO" },
      { name: "CENTRO DE PRIMER NIVEL LA CULATA" },
      { name: "CENTRO DE PRIMER NIVEL LA SABINA" },
      { name: "CENTRO DE PRIMER NIVEL LA TORRE" },
      { name: "CENTRO DE PRIMER NIVEL LIMONAL" },
      { name: "CENTRO DE PRIMER NIVEL MANABAO" },
      { name: "CENTRO DE PRIMER NIVEL OCTAVIA GAUTIER" },
      { name: "CENTRO DE PRIMER NIVEL PASO BAJITO" },
      { name: "CENTRO DE PRIMER NIVEL PIEDRA BLANCA" },
      { name: "CENTRO DE PRIMER NIVEL PONTON" },
      { name: "CENTRO DE PRIMER NIVEL RIO SECO" },
      { name: "CENTRO DE PRIMER NIVEL SAN MIGUEL" },
      { name: "CENTRO DE PRIMER NIVEL SANTO CERRO" },
      { name: "CENTRO DE PRIMER NIVEL TIREO" },
      { name: "CENTRO DE SALUD OBRA SOCIAL SALESIANA" },
      { name: "CENTRO MEDICO PADRE FANTINO" },
      { name: "CLÍNICA BAEZ SOTO" },
      { name: "CLÍNICA CEMEVE" },
      { name: "COOPERATIVA VEGA REAL" },
      { name: "CUERPO DE BOMBEROS" },
      { name: "HISPITAL JIMA ABAJO " },
      { name: "HOSPITAL JUAN ANT.CASTILLO" },
      { name: "HOSPITAL MORILO KING " },
      { name: "POLICLINICO LA VEGA" },
    ],
  },
  {
    name: "MONTE CRISTI",
    centers: [
      { name: "BUEN HOMBRE (VISITAR)" },
      { name: "CARBONERA (VISITAR)" },
      { name: "CENTRO COMUNAL LOMA DE CASTAÑUELAS" },
      { name: "DOÑA ANTONIA (VER)" },
      { name: "IGLESIA HATILLO PALMA" },
      { name: "IGLESIA O PARQUE VILLA GARCÍA" },
      { name: "LILO CAFÉ & RESTAURANT" },
      { name: "POLIDEPOIRTIVO DE GUAYUBIN" },
      { name: "POLIDEPORTIVO - CASTAÑUELA" },
      { name: "POLIDEPORTIVO - CASTAÑUELAS" },
      { name: "POLIDEPORTIVO - LAS MATAS DE SANTA CRUZ" },
      { name: "POLIDEPORTIVO DE MANZANILLO" },
      { name: "POLIDEPORTIVO MONTECRISTI" },
      { name: "UNIDAD DE ATENCION PRIMARIA COPEY" },
      { name: "UNIDAD DE ATENCION PRIMARIA HATO DEL MEDIO" },
      { name: "UNIDAD DE ATENCION PRIMARIA SANTA CRUZ" },
      { name: "UNIDAD DE ATENCION PRIMARIA ALTO DE LA PALOMA" },
      { name: "UNIDAD DE ATENCION PRIMARIA CERRO GORDO" },
      { name: "UNIDAD DE ATENCION PRIMARIA EL AHOGADO" },
      { name: "UNIDAD DE ATENCION PRIMARIA EL CENTRO" },
      { name: "UNIDAD DE ATENCION PRIMARIA EL POCITO DE GUAYUBIN" },
      { name: "UNIDAD DE ATENCION PRIMARIA HATILLO PALMA" },
      { name: "UNIDAD DE ATENCION PRIMARIA HERMANAS MIRABAL" },
      { name: "UNIDAD DE ATENCION PRIMARIA LA CAPITALITA" },
      { name: "UNIDAD DE ATENCION PRIMARIA LA GALLERA" },
      { name: "UNIDAD DE ATENCION PRIMARIA LAS FLORES" },
      { name: "UNIDAD DE ATENCION PRIMARIA LAS MATAS" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS CONUCOS (VV)" },
      { name: "UNIDAD DE ATENCION PRIMARIA LOS CONUCOS MC" },
      { name: "UNIDAD DE ATENCION PRIMARIA MARTIN GARCIA" },
      { name: "UNIDAD DE ATENCION PRIMARIA PILOTO" },
      { name: "UNIDAD DE ATENCION PRIMARIA SANTA CRUZ" },
      { name: "UNIDAD DE ATENCION PRIMARIA VILLA ELISA" },
      { name: "UNIDAD DE ATENCION PRIMARIA VILLA SINDA" },
    ],
  },
  {
    name: "BOCA CHICA",
    centers: [{ name: "GACEBO DEL PARQUE MONTE ADENTRO" }],
  },
];

centros.sort((a, b) => (a.name < b.name ? -1 : 1));
