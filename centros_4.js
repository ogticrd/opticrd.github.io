const centros = [
  {
    name: 'SANTO DOMINGO ESTE',
    centers: [
      { name: 'CLUB NAUTICO' },
      { name: 'HOTEL HAMACA' },
      { name: 'LABORATORIO AMADITA' },
      { name: 'DIRECCION AREA DE SALUD II' },
      { name: 'ARMADA DOMINICANA' },
      { name: 'AYUNTAMIENTO SANTO DOMINGO ESTE' },
      { name: 'CLUB PLAN SOCIAL DE LOS BILLETEROS' },
      { name: 'CLUB EL ROSAL' },
      { name: 'INSTITUTO SOCIAL COLECTIVO DE SALUD POPULAR (COPSALUD)' },
      { name: 'CPN EL DIQUE' },
      { name: 'CPNA VIETNAM' },
      { name: 'DISPENSARIO MEDICO SANTA MARIA REINA' },
      { name: 'ESCUELA PRIMARIA CELINA PELLIER' },
      { name: 'CUERPO DE BOMBERO' },
      { name: 'HOSPITAL DR DARIO CONTRERAS' },
      { name: 'JUMBO SAN ISIDRO' },
      { name: 'JUMBO MEGACENTRO' },
      { name: 'MINISTERIO EL CAMINO DEL REINO' },
      { name: 'MULTIUSO URBANIZACION HAMARAP' },
      { name: 'PARROQUIA SAN AGUSTIN' },
      { name: 'PLAY LA ZAFRA' }
    ]
  },
  {
    name: 'SANTO DOMINGO NORTE',
    centers: [
      { name: 'BIBLIOTECA MULTIUSO GUARICANO CENTRO' },
      { name: 'MULTIUSO SABANA PERDIDA' },
      { name: 'CLUD MULTIUSO EL CROM' },
      { name: 'MULTIUSO SANTA CRUZ IGLESIA CATOLICA' },
      { name: 'HOGAR DE DIA SABANA PERDIDA' },
      { name: 'DISTRITO 10-01' },
      { name: 'ESCUELA RAMON MATIAS MELLA' },
      { name: 'MULTIUSO LA VICTORIA' },
      { name: 'ESCUELA LEONCIO MANZUETA' },
      { name: 'ESCUELA SAN FELIPE' },
      { name: 'ESCUELA BETHANIA' },
      { name: 'RAMONA NERIS SOSA' },
      { name: 'ESCUELA TAIWAN' },
      { name: 'COLEGIO LA ROSA' },
      { name: 'CIBAO' }
    ]
  },
  {
    name: 'DISTRITO NACIONAL',
    centers: [
      { name: 'HOSPITAL DOCENTE DR. FRANCISCO MOSCOSO PUELLO' },
      { name: 'CLUB LUPERON' },
      { name: 'OFICINAS DAS-IV' },
      { name: 'FUNDACION HUELLAS DEL SIGLO' },
      { name: 'MERCASID' },
      { name: 'FUNSAZURZA' },
      { name: 'FUNDACION ESCOBA' },
      { name: 'CPN VALENTIN BUTTEN' },
      { name: 'CLUB LOS PIONEROS' },
      { name: 'ASOCIACION DE COMERCIANTES MERCADO NUEVO' },
      { name: 'CLUB LOS BOMBERITOS' },
      { name: 'AGRUCUDEGUA' },
      { name: 'FUNDACION JUDEGU' },
      { name: 'CENTRO DIAGNOSTICO BARNEY MORGAN' },
      { name: 'CLUB RAFAEL BARIAS' },
      { name: 'HOSPITAL DR. FELIX MARIA GOICO' },
      { name: 'ANTI TB INFANTIL' },
      { name: 'CPN SAN PEDRO APOSTOL' },
      { name: 'CLUB MAURICIO BAEZ' },
      { name: 'CPNA LA CASC' },
      { name: 'PLAZA SAMBIL' },
      { name: 'CLUB MARIA AUXILIADORA' },
      { name: 'CLUB RENACER' },
      { name: 'CLUB LOS TRINITARIOS ' },
      { name: 'IGLESIA PERPETUO SOCORRO' },
      { name: 'CENTRO OLÍMPICO' },
      { name: 'PLAZA LAMA' },
      { name: 'UNIVERSIDAD DOMINICANA O&M' },
      { name: 'CENTRO CUESTA NACIONAL (CCN)' },
      { name: 'AGORA MALL' },
      { name: 'MINISTERIO DE DEFENSA' },
      { name: 'DISPENSARIO TEJADA Y FLORENTINO (UASD)' },
      { name: 'CLUB INDEPENDENCIA' },
      { name: 'CLUB NACO' },
      { name: 'PUCMM' },
      { name: 'INSTITUTO SAN JUAN BAUTISTA' },
      { name: 'MULTICENTRO LA SIRENA CHURCHILL' },
      { name: 'COLEGIO SAN GABRIEL' },
      { name: 'UNICARIBE' },
      { name: 'MOVEARTE' },
      { name: 'CPN SAN CARLOS' },
      { name: 'INSTITUTO DE AUXILIOS Y VIVIENDAS (INAVI)' },
      { name: 'CNP VILLA FRANCISCA' },
      { name: 'CENTRO MEDIDO FUSADI' },
      { name: 'HOSPITAL MATERNO INFANTIL SANTO SOCORRO' },
      { name: 'PLAZA DUARTE (CARREFOUR)' },
      { name: 'UNPHU' },
      { name: 'ESCUELA PROFESOR JUAN BOSH' },
      { name: 'PLAZA DE LA SALUD' },
      { name: 'CPN DIVINA PROVIDENCIA' },
      { name: 'DIRECCION GENERAL DE EPIDEMIOLOGIA (DIGEPI)' },
      { name: 'CEDIMAT' },
      { name: 'CPN LOS GIRASOLES' }
    ]
  },
  {
    name: 'SANTO DOMINGO OESTE',
    centers: [
      { name: 'HOSPITAL MUNICIPAL DE ENGOMBE' },
      { name: 'CPN COSALUD' },
      { name: 'LA HORA DE DIOS' },
      { name: 'MULTIUSO SOCORRO MUTUO' },
      { name: 'MULTIUSO EL ABANICO' },
      { name: 'CENTRO COMUNAL LAS PALMAS' },
      { name: 'PARROQUIA NUESTRA SEÑORA LA ALTAGRACIA/CPN DIAZ PIÑEYRO' },
      { name: 'CPN LAS MANOS DE JESUS' },
      { name: 'HOSPITAL MARCELINO VELEZ SANTANA' },
      { name: 'CPN LAS CAOBAS' },
      { name: 'CPN UNAP HATO NUEVO' },
      { name: 'PARROQUIA ESPIRITU SANTO' },
      { name: 'OPERACIONES ESPECIALES' },
      { name: 'OMSA' },
      { name: 'SANTO DOMINGO COUNTRY CLUB' },
      { name: 'FUNDACION PEDRO MARTINEZ' },
      { name: 'CLUB BANCO DE RESERVAS' },
      { name: 'IGLESIA SAN PEDRO NOLASCO' },
      { name: 'HOSPITAL MUNICIPAL ALCARRIZOS II' },
      { name: 'CLINICA EBENEZER' },
      { name: 'CENTRO MEDICO CRISTIANO ELIAS SANTANA' },
      { name: 'PLAZA PRESIDENTE PEÑA GOMEZ' },
      { name: 'CUERPO DE BOMBEROS LOS ALCARRIZOS' },
      { name: 'MULTIUSO PALMAREJO' },
      { name: 'MULTIUSO PANTOJA' },
      { name: 'IGLESIA SAGRADA FAMILIA, VILLA LINDA' },
      { name: 'MERCA' },
      { name: 'HOSPITAL DOCTOR RODOLFO DE LA CRUZ LORA' },
      { name: 'CENTRO DE REHABILITACION PSICOSOCIAL PADRE BILLINI' },
      { name: 'CPN LOS COROZOS' },
      { name: 'IGLESIA DE DIOS, CRISTO LA SENDA' },
      { name: 'CPN LA CUABA' },
      { name: 'CPN LA GUAYIGA' },
      { name: 'CPN EL PEDREGAL' }
    ]
  },
  {
    name: 'SAN JUAN',
    centers: [
      { name: 'EL CASINO SAN JUAN' },
      { name: 'HOSPITAL ALEJANDRO CABRAL' },
      { name: 'CODIA' },
      { name: 'PARQUE SÁNCHEZ' },
      { name: 'SALÓN DE CONFERENCIA DPS SAN JUAN' },
      { name: 'CLUB COME MORO' },
      { name: 'CLUB DIEGO DE VELAZQUEZ' },
      { name: 'AYUNTAMIENTO MUNICIPAL LAS MATAS DE FARFAN' },
      { name: 'UNAP LOS CARTONES' },
      { name: 'UNAP VILLA CARMEN' },
      { name: 'UNAP LOS GRINGOS' },
      { name: 'UNAP LA ESTANCIA' },
      { name: 'UNAP EL NARANJO' },
      { name: 'UNAP YABONICO' },
      { name: 'UNAP MATAYAYA' },
      { name: 'UNAP POZO HONDO' },
      { name: 'UNAP VILLA ESPERANZA' },
      { name: 'UNAP BOHECHIO' },
      { name: 'UNAP ARROYO CANO' },
      { name: 'UNAP BUENA VISTA DEL YAQUE' },
      { name: 'UNAP DERRUMBADERO' },
      { name: 'UNAP LA RANCHA' },
      { name: 'UNAP VALLECITO' },
      { name: 'UNAP EL JOVITO' },
      { name: 'UNAP LA NAVAJA' },
      { name: 'UNAP BATISTA' },
      { name: 'UNAP JUAN HERRERA' },
      { name: 'UNAP JINOVA' },
      { name: 'UNAP VALLEJUELO' },
      { name: 'UNAP CAPULIN' },
      { name: 'UNAP JORGILLO' }
    ]
  },
  {
    name: 'MARIA TRINIDAD SANCHEZ',
    centers: [
      { name: 'AYUNTAMIENTO MUNICIPAL NAGUA' },
      { name: 'AYUNTAMIENTO DEL POZO' },
      { name: 'CASA DE FORMACION SAGRADA FAMILIA' },
      { name: 'CENTRO COMUNITARIO MATA BONITA' },
      { name: 'CPN ARROYO AL MEDIO' },
      { name: 'CPN EL PAPAYO' },
      { name: 'CPN LA FACTORIA' },
      { name: 'CPN LAS GORDAS' },
      { name: 'CPN LOS YAYALES' },
      { name: 'UNAP MATANCITA' },
      { name: 'CENTRO COMUNITARIO PAYITA' },
      { name: 'DPS-MARÍA TRINIDAD SANCHEZ ' },
      { name: 'HOSPITAL DR. ANTONIO YAPOR HEDED' },
      { name: 'HOSPITAL DR. CARLOS A. ZAFRA' },
      { name: 'POLIDEPORTIVO CABRERA' },
      { name: 'POLIDEPORTIVO RIO SAN JUAN' },
      { name: 'UASD NUEVA NAGUA' }
    ]
  },
  {
    name: 'SAMANA',
    centers: [
      { name: 'POLIDEPORTIVO' },
      { name: 'UNAP ALGARROBO' },
      { name: 'CRUCE DE TEZÓN' },
      { name: 'JUNTA DE VECINOS JUANA VICENTA' },
      { name: 'RANCHO ESPAÑOL' },
      { name: 'CENTRO COMUNAL LOS COCOS' },
      { name: 'UNAP LA PAMILLA' },
      { name: 'CENTRO TECNOLOGICO COMUNITARIO DEL LIMÓN' },
      { name: 'SINDICATO DE LA PORTUARIA' },
      { name: 'UNAP LA CHORRERA' },
      { name: 'CENTRO COMUNAL LOS ROBALOS' },
      { name: 'FABRICA DE HIELO LA PASCUALA' },
      { name: 'IGLESIA EL MAJAGUAL' },
      { name: 'JUNTA DE VECINO LOS CACAO' },
      { name: 'UNAP LOS GRATINI' },
      { name: 'AYUNTAMIENTO MUNICIPAL' },
      { name: 'IGLESIA CATOLICA LAS GARITAS' },
      { name: 'HOSPITAL DR. ALBERTO GAUTREAUX' },
      { name: 'IGLESIA CATÓLICA (RINCON)' },
      { name: 'JUNTA DISTRITAL LAS GALERAS' },
      { name: 'UNAP EL CATEY' },
      { name: 'UNAP LA LOMETA' },
      { name: 'UNAP LA MAJAGUA' },
      { name: 'UNAP EL NARANJITO' },
      { name: 'UNAP LOS PUENTES' }
    ]
  },
  {
    name: 'PUERTO PLATA',
    centers: [
      { name: 'DIRECCION PROVINCIAL DE SALUD DE PUERTO PLATA' },
      { name: 'LIGA DE ATLANTICO' },
      { name: 'PLAY DE LA FORTALEZA' },
      { name: 'PLAY DE PADRE LAS CASAS' },
      { name: 'POLIDEPORTIVO PUERTO PLATA' },
      { name: 'CPN DOLORES DE LA CRUZ' },
      { name: 'AYUNTAMIENTO DE SOSUA' },
      { name: 'AYUNTAMIENTO DE CABARETE' },
      { name: 'CPN SABANETA DE YASICA' },
      { name: 'CLUB DE YASICA ARRIBA' },
      { name: 'CPN YASICA' },
      { name: 'IGLESIA EL SHADDAI' },
      { name: 'HOSPITAL MUNICIPAL DE IMBERT' },
      { name: 'HOSPITAL MUNICIPAL DE ALTAMIRA' },
      { name: 'HOSPITAL MUNICIPAL DE GUANANICO' },
      { name: 'HOSPITAL MUNICIPAL DE LOS HIDALGOS' },
      { name: 'CPN NAVAS' },
      { name: 'HOSPITAL MUNICIPAL DE VILLA ISABELA' }
    ]
  },
  {
    name: 'LA ROMANA',
    centers: [
      { name: 'ORENSE 2 ' },
      { name: 'UNIVERSIDAD UHCFE' },
      { name: 'HOSPITAL GUAYMATE' },
      { name: 'HOSPITAL MATERNO INFANTIL DR. FRANCISCO A. GONZALVO' },
      { name: 'VIVAX DOMINICUS' },
      { name: 'DPS LA ROMANA' },
      { name: 'HOSPITAL ARÍSTIDES FIALLO CABRAL ' },
      { name: 'POLICLINICO DUARTE' },
      { name: 'IGLESIA MARANAHTA.' },
      { name: 'DPS LA ROMANA  PFV' },
      { name: 'DPS LA ROMANA  DOMICILIARIO.' },
      { name: 'CASA DE  CAMPO.  ' },
      { name: 'CENTRO DIAGNOSTICO CALETA' },
      { name: 'UNAP CALETA' },
      { name: 'UNAP ISLA SAONA ' },
      { name: 'UNAP VILLA HERMOSA 4' },
    ]
  },
  {
    name: 'PEDERNALES',
    centers: [
      { name: 'HOSPITAL PROVINCIAL DR ELIO FIALLO' },
      { name: 'DPS PEDERNALES' },
      { name: 'UNAP OVIEDO PEDERNALES' },
      { name: 'UNAP#3 Y #4' },
      { name: 'UNAP#5 Y #6' },
      { name: 'UNAP#7 Y #8' },
      { name: 'UNAP#9' }
    ]
  },
  {
    name: 'BARAHONA',
    centers: [
      { name: 'PARAISO UNAP 1, 2' },
      { name: 'PARAISO UNAP 3 Y 4' },
      { name: 'UNAP LOS PATOS' },
      { name: 'UNAP BAHORUCO' },
      { name: 'UNAP LA CIENAGA ' },
      { name: 'UNAP SAVICA' },
      { name: 'UNAP LAS SALINAS' },
      { name: 'UNAP CABRAL CENTRO' },
      { name: 'IGLESIA RESURECCION Y VIDA (FLEMING)' },
      { name: 'UNAP BAITOITA' },
      { name: 'UNAP CASANDRA' },
      { name: 'UNAP ALTO BELO' },
      { name: 'UNAP LA RAQUETA' },
      { name: 'UNAP CACHON' },
      { name: 'PLAZA COMUNAL VICENTE NOBLE' },
      { name: 'UNAP PEÑON' },
      { name: 'UNAP FONDO NEGRO' },
      { name: 'UNAP LA HOYA' },
      { name: 'UNAP QUITA CORAZA' },
      { name: 'UNAP LA LISTA' },
      { name: 'POLO CENTRO COMUNAL' },
      { name: 'UNAP LOS BLANCOS' },
      { name: 'UNAP LOS COCOS' },
      { name: 'HOSPITAL MUNICIPAL ENRIQUILLO' },
      { name: 'CLUB ENRIQUILLO' },
      { name: 'UNAP LA PEÑUELA' },
      { name: 'UNAP CANOA' },
      { name: 'UNAP PESCADERIA' },
      { name: 'UNAP MAJAGUAL' },
      { name: 'UNAP LOS SALADILLOS' },
      { name: 'UNAP ARROYO DULCE' },
      { name: 'IGLESIAS BUENAS NUEVAS' },
      { name: 'UNAP LA PLAYA' },
      { name: 'UNAP MARIA MONTES' },
      { name: 'UNAP LA MONTAÑITA' },
      { name: 'COLEGIO MEDICO DOMINICANO' },
      { name: 'UNAP INVI-CEA' },
      { name: 'UNAP FUNDACION' }
    ]
  },
  {
    name: 'SANTIAGO',
    centers: [
      { name: 'HOSPITAL REGIONAL UNIVERSITARIO ARTURO GRULLON' },
      { name: 'HOSPITAL ESTRELLA UREÑA' },
      { name: 'CLINICA SANTIAGO APOSTOL' },
      { name: 'CLUB GUG' },
      { name: 'CLUB ATLETICO MAMBUICHE' },
      { name: 'PARQUE CENTRAL' },
      { name: 'TECHADO CIENFUEGO' },
      { name: 'PALACIO DE JUSTICIA' },
      { name: 'CLUB NOEL' },
      { name: 'ZONA FRANCA PISANO' },
      { name: 'MEDICA' },
      { name: 'REGIONAL DE SALUD' },
      { name: 'CLUB CREATIVO:NAVARRETE' },
      { name: 'PARQUE DE VILLA GONZALEZ' },
      { name: 'CPN EL LIMON' },
      { name: 'CENTRO DE DESARROLLO' },
      { name: 'CPN LOS TOCONES' },
      { name: 'CPN RANCHITO JACAGUA' },
      { name: 'CPN PALMAR ARRIBA' },
      { name: 'CPN VILLA NUEVA' },
      { name: 'OMSA' },
      { name: 'IGLESIA ADVENTISTA' },
      { name: 'CLUB BARACOA' },
      { name: 'CLUB LA OTRA BANDA' },
      { name: 'CENTRO INTEGRAL BELLA VISTA' },
      { name: 'CPN YAGUITA DEL PASTOR' },
      { name: 'HOSPITAL MUNICIPAL HATO DEL YAQUE' },
      { name: 'CLUB HATO DEL YAQUE' },
      { name: 'HOSPITAL IRENE FERNÁNDEZ JÁNICO' },
      { name: 'HOSPITAL LUIS ESPAILLAT SABANA IGLESIA' },
      { name: 'SINDICATO DE CHOFERES LA JOYA' },
      { name: 'SINDICATO DE CHOFERES RUTA B' },
      { name: 'CPN EL RUBIO' },
      { name: 'CPN MANACLAS' },
      { name: 'CPN LAS PLACETAS' },
      { name: 'CPN RINCÓN DE PIEDRA' },
      { name: 'UASD BARRANQUITA' },
      { name: 'HOSPITAL CABRAL Y BAEZ' },
      { name: 'CLINICA UNION MEDICA' },
      { name: 'PUCMM' },
      { name: 'HOSPITAL DE ESPECIALIDADES MEDICAS MATERNO INFANTIL DR PAULINO REYES (HEMMI)' },
      { name: 'UTESA' },
      { name: 'ESCUELA DE COLORADO' },
      { name: 'ESCUELA DE HATO MAYOR' },
      { name: 'SINDICATO LOS PEPINES' },
      { name: 'DEFENSA CIVIL' },
      { name: 'CLUB PUÑAL LAUDES' },
      { name: 'LICEO ANA MERCEDES BALBUENA MATANZA' },
      { name: 'PSIQUIATRICO' },
      { name: 'HOSPITAL DE BAITOA' },
      { name: 'ACERO ESTRELLA Y BOTICA' },
      { name: 'UNIVERSIDAD NUÑEZ MOLINA (LICEY)' },
      { name: 'CLUB VILLA OLGA' },
      { name: 'CORAASAN' },
      { name: 'SINDICATO DE CHOFERES YAPUR DUMIT' },
      { name: 'LICEO EUGENIO DE JESUS MARCANO (TAMBORIL)' }
    ]
  },
  {
    name: 'BAHORUCO',
    centers: [
      { name: 'CLUB LAS VIÑAS EN LOS RÍOS' },
      { name: 'UNAP LAS CLAVELLINAS ' },
      { name: 'MULTIUSO JARAGUA' },
      { name: 'EL ESTERO DE NEYBA' },
      { name: 'MULTIUSO NEYBA' },
      { name: 'DPS BAHORUCO NEYBA' },
      { name: 'UNAP APOLINAR PERDOMO' },
      { name: 'UNAP EL AGUACATE ' },
      { name: 'UNAP  BATEY 2' },
      { name: 'UNAP EL PALMAR' },
      { name: 'CENTRO COMUNAL GALVAN' },
      { name: 'UNAP EL SALADO' },
      { name: 'UNAP LAS SABILAS' },
      { name: 'UNAP LAS TEJAS' },
      { name: 'UNAP LAS PIEDRAS' },
      { name: 'MULTIUSO TAMAYO' },
      { name: 'AYUNTAMIENTO DE TAMAYO' },
      { name: 'UNAP CABEZA DE TORO' },
      { name: 'UNAP BATEY 6' },
      { name: 'UNAP MENA ARRIBA' },
      { name: 'UNAP LOS ROBLES' },
      { name: 'UNAP UVILLA' },
      { name: 'UNAP SANTANA' },
      { name: 'UNAP MINSERRAT' },
      { name: 'UNAP ALTAMIRA' },
      { name: 'UNAP VUELTA GRANDE.' }
    ]
  },
  {
    name: 'MONTECRISTI',
    centers: [
      { name: 'POLIDEPORTIVO ERIKSON ACOSTA' },
      { name: 'CENTRO COMUNAL LOMA DE CASTAÑUELAS' },
      { name: 'UNAP LA CAPITALITA' },
      { name: 'UNAP EL AHOGADO' },
      { name: 'UNAP EL VIJIADOR' },
      { name: 'LILO CAFÉ & RESTAURANT' },
      { name: 'CLUB DEPORTIVO Y CULTURAL SAN PEDRO' },
      { name: 'UNAP LAS FLORES' },
      { name: 'UNAP HERMANAS MIRABAL' },
      { name: 'CPN SANTA BARBARA' },
      { name: 'UNAP LOS CONUCOS MC' },
      { name: 'UNAP LOS BATEYES' },
      { name: 'IGLESIA CRISTIANA REHOBOTH' },
      { name: 'IGLESIA KM 14' },
      { name: 'UNAP SANTA CRUZ' },
      { name: 'UNAP LAS MATAS' },
      { name: 'MULTIUSO DE LAS MATAS DE SANTA CRUZ' },
      { name: 'POLIDEPORTIVO DE MANZANILLO' },
      { name: 'UNAP ALTO DE LA PALOMA' },
      { name: 'UNAP COPEY' },
      { name: 'CLUB JUAN PABLO ' },
      { name: 'UNAP SANTA MARIA' },
      { name: 'UNAP BARRIO SUR' },
      { name: 'UNAP EL CENTRO' },
      { name: 'UNAP LA GALLERA' },
      { name: 'UNAP LOS CONUCOS (VV)' },
      { name: 'UNAP VILLA SINDA' },
      { name: 'UNAP VILLA ELISA' },
      { name: 'UNAP HATILLO PALMA' },
      { name: 'CLUB CULTURAL HATILLO PALMA' },
      { name: 'POLIDEPOIRTIVO DE GUAYUBIN' },
      { name: 'AYUNTAMIENTO DE CANA CHAPETON' },
      { name: 'UNAP PILOTO' },
      { name: 'UNAP MARTIN GARCIA' },
      { name: 'UNAP CERRO GORDO' },
      { name: 'UNAP DERRAMADEROS' },
      { name: 'UNAP EL POCITO DE GUAYUBIN' }
    ]
  },
  {
    name: 'SANTIAGO RODRIGUEZ',
    centers: [
      { name: 'ESCUELA ANA JOAQUIN HIDALGO' },
      { name: 'CLUB SAN JOSE' },
      { name: 'ESCUELA LAS CAOBA' },
      { name: 'HOSPITAL MUNICIPAL' },
      { name: 'UNIDAD DE ATENCION PRIMARIA MAMONCITO' },
      { name: 'CLUB LA CEIBA' },
      { name: 'UNIDAD DE ATENCION PRIMARIA EL PINO' }
    ]
  },
  {
    name: 'SAN CRISTOBAL',
    centers: [
      { name: 'DIRECCIÓN PROVINCIAL DE SALUD (DPS) DE SAN CRISTOBAL' },
      { name: 'COLEGIO OFICIALIZADO SAN RAFAEL' },
      { name: 'COMEDORES ECONOMICOS' },
      { name: 'PARQUE RADHAMES' },
      { name: 'CEDISA' },
      { name: 'HOSPITAL J. MAÑON' },
      { name: 'HOSPITAL JUAN PABLO PINA' },
      { name: 'CENTRO DIAGNOSTICO VILLA FUNDACION' },
      { name: 'CPN MAMA TINGO' },
      { name: 'POLIDEPORTIVO DE NIGUA' },
      { name: 'POLICLINICA NUESTRA SEñORA DE LAS MERCEDES' },
      { name: 'HOSPITAL MUNICIPAL TOMASINA VALDEZ' },
      { name: 'HOSPITAL MUNICIPAL DE YAGUATE' },
      { name: 'MULTIUSO JOSE FRANCISCO PEñA GOMEZ' },
      { name: 'HOSPITAL MUNICIPAL BAJOS DE HAINA' },
      { name: 'UNAP LA PARED' },
      { name: 'UNAP EL CARRIL' },
      { name: 'ASOCIACION DE INDUSTRIA' }
    ]
  },
  {
    name: 'SAN JOSE DE OCOA',
    centers: [
      { name: 'HOSPITAL GUARIONEX ALCANTARA' },
      { name: 'CENTRO DE DIAGNÓSTICO BELLA VISTA' },
      { name: 'DPS OCOA' },
      { name: 'POLICIA NACIONAL OCOA' },
      { name: 'EJÉRCITO NACIONAL FORTALEZA OCOA' },
      { name: 'UNAP LAS FLORES' },
      { name: 'CPN SAN ANOTNIO ' },
      { name: 'CPN PUEBLO ABAJO ' },
      { name: 'CPN SAN LUIS' },
      { name: 'CPN PUEBLO ARRIBA LA VIGIA' },
      { name: 'CPN SAN RAFAEL' },
      { name: 'CPN  SABANA LARGA CENTRO' },
      { name: 'CPN  SABANA LARGA EL LIMONAL' },
      { name: 'CPN  SABANA LARGA ABAJO' },
      { name: 'CPN MONTE NEGRO' },
      { name: 'CPN ARROYO CAÑA' },
      { name: 'CPN MAHOMA' },
      { name: 'CPN OJO DE AGUA' },
      { name: 'CPN LA CIENEGA' },
      { name: 'CPN NARANJAL' },
      { name: 'CPN LOS MARTINEZ' },
      { name: 'CPN LOS RACHITOS' },
      { name: 'CPN NIZAO' },
      { name: 'CPN LAS AUYAMAS' },
      { name: 'CPN EL PINAL' },
      { name: 'CPN LOS COROZOS' },
      { name: 'CPN EL CERCADO' },
      { name: 'HOSPITAL SAN JOSÉ' },
      { name: 'CLÍNICA ARIAS' },
      { name: 'CLINICA BAEZ' },
      { name: 'CPN LA HORMA' },
      { name: 'PARQUE LIBERTAD' }
    ]
  },
  {
    name: 'ESPAILLAT',
    centers: [
      { name: 'CANCHA MUNICIPAL' },
      { name: 'SALON DE ACTIVIDADES BARRIO LA ESTELA' },
      { name: 'CLUB RECREATIVO ' },
      { name: 'CLUB CASINO RENACIMIENTO' },
      { name: 'CLUB LIBERTAD GASPAR HERNANDEZ' },
      { name: 'CLUB MUNICIPAL JAMAO AL NORTE' },
      { name: 'CPN ALGARROBO' },
      { name: 'CPN BATEY GINEBRA' },
      { name: 'CPN BOCA FERREA' },
      { name: 'CPN BONAGUA' },
      { name: 'CPN CANCA LA REYNA' },
      { name: 'CPN LA CEIBA DE MADERA' },
      { name: 'CPN CUERO DURO' },
      { name: 'CPN DE GUAUCI' },
      { name: 'CPN EL CAIMITO' },
      { name: 'CPN EL COROZO' },
      { name: 'CPN EL HIGUERITO' },
      { name: 'CPN JUAN LOPEZ' },
      { name: 'CPN LA ERMITA' },
      { name: 'CPN LA GUAMA' },
      { name: 'CPN LAS GUAZUMAS' },
      { name: 'CPN LA ISLETA' },
      { name: 'CPN LA MANZANA' },
      { name: 'CPN LA YAGUA' },
      { name: 'CPN LAS FLORES' },
      { name: 'CPN LAS LAGUNAS ' },
      { name: 'CPN LOS LOPEZ' },
      { name: 'CPN LOS PANCHOS' },
      { name: 'CPN MANUEL RODRIGUEZ' },
      { name: 'CPN MONTE DE LA JAGUA ' },
      { name: 'CPN NUEVO PUERTO RICO' },
      { name: 'CPN ORTEGA' },
      { name: 'CPN QUEBRADA HONDA' },
      { name: 'CPN REPARADERO' },
      { name: 'CPN SAL SI PUEDES' },
      { name: 'CPN SAN VICTOR' },
      { name: 'CPN SANTA ROSA' },
      { name: 'CPN TIERRA DURA' },
      { name: 'CPN VERAGUA' },
      { name: 'CPN VIEJO PUERTO RICO' },
      { name: 'CPN VILLA CAFETALERA' },
      { name: 'CPN VILLA PROGRESO' },
      { name: 'CPN ZAFARRAYA' },
      { name: 'DISTRITO 06-01 JOSE CONTRERAS' },
      { name: 'CPN  LOS  BRAZOS' },
      { name: 'CPN LOS PUENTES ' },
      { name: 'HOSPITAL JOSÉ CONTRERAS' },
      { name: 'ESCUELA LOS RINCONES ' },
      { name: 'SALON DON BOSCO KM1 ' },
      { name: 'CPN PALMA  HERRADA ' },
    ]
  },
  {
    name: 'DUARTE',
    centers: [
      { name: 'CENTRO MÉDICO DOCTOR OVALLE' },
      { name: 'CENTRO MÉDICO SIGLO 21' },
      { name: 'CAPILLA LA ALTAGRACIA' },
      { name: 'CATEDRAL SANTA ANA - JUAN XXIII' },
      { name: 'FEDERACIÓN MOTOCONCHISTAS' },
      { name: 'PALACIO DE JUSTICIA' },
      { name: 'UASD' },
      { name: 'CLUB HERMANAS MIRABAL' },
      { name: 'ESCUELA GREGORIO LUPERÓN VISTA AL VALLE' },
      { name: 'MULTIUSO ARENOSO' },
      { name: 'EL AGUACATE' },
      { name: 'MULTIUSOS VILLA RIVAS' },
      { name: 'SEIBA DE LOS PÁJAROS' },
      { name: 'CENTRO COMUNAL DE CASTILLO' },
      { name: 'ARENA 57 DE PIMENTEL' },
      { name: 'SAN FELIPE ARRIBA' },
      { name: 'LA ISLETA DE CERREJÓN' },
      { name: 'LA ENEA' },
      { name: 'CLUB SALOME UREÑA' },
      { name: 'CLUB MIGUEL GELABERT' },
      { name: 'NARANJO DULCE ' },
      { name: 'GENIMO' }
    ]
  },
  {
    name: 'DAJABON',
    centers: [
      { name: 'POLI DEPORTIVO  AMBRIOSO ESTEVEZ' },
      { name: 'POLI DEPORTIVO LA CEIBA' },
      { name: 'CENTRO DE MADRE EL CRUCE' },
      { name: 'UNAP CAPOTILLO' },
      { name: 'UNAP HIPOLITO BILLINI' },
      { name: 'DPS DAJABON' },
      { name: 'CASA DE LA CULTURA' },
      { name: 'CENTRO DE MADRE LUPERON' }
    ]
  },
  {
    name: 'PERAVIA',
    centers: [
      { name: 'ROSA NOVA' },
      { name: 'SANTANA ARRIBA' },
      { name: 'BUENAS NUEVAS' },
      { name: 'PIZARRETE I' },
      { name: 'PIZARRETE II' },
      { name: 'LAS BARIAS' },
      { name: 'EL CARRETON' },
      { name: 'DON GREGORIO I' },
      { name: 'VALDESIA' },
      { name: 'RIO ARRIBA' },
      { name: 'PAYA ARRIBA' },
      { name: 'PAYA ABAJO' },
      { name: 'MATA GORDA' },
      { name: 'FUNDACION DE PERAVIA I' },
      { name: 'FUNDACION DE PERAVIA II' },
      { name: 'ESCONDIDO I' },
      { name: 'ESCONDIDO II' },
      { name: 'EL LIMONAL' },
      { name: 'VILLA GUERA' },
      { name: 'VILLA DAVID' },
      { name: 'SAONA I' },
      { name: 'SAONA II' },
      { name: 'EL MANI' },
      { name: 'LOS YAGUARIZOS' },
      { name: 'MAXIMO GOMEZ' },
      { name: 'VILLA SOMBRERO 1' },
      { name: 'VILLA SOMBRERO 2' },
      { name: 'HONDURAS' },
      { name: 'LAS TABLAS' },
      { name: 'CAÑAFISTOL ARRIBA' },
      { name: 'CAÑAFISTOL ABAJO' },
      { name: 'LAS CARRERAS' },
      { name: 'SABANA BUEY' },
      { name: 'QUIJA QUIETA' },
      { name: 'MATANZAS ARRIBA' },
      { name: 'MATANZAS ABAJO' },
      { name: 'SALINAS' },
      { name: 'LOS TUMBAOS' },
      { name: 'ARROYO HONDO' },
      { name: 'LAS CALDERAS' },
      { name: 'EL LLANO' },
      { name: 'SANTA ROSA 1' },
      { name: 'SANTA ROSA 2' },
      { name: 'SANTA ROSA 3' },
      { name: 'BOCA CANASTA 1' },
      { name: 'BOCA CANASTA 2' },
      { name: '24 DE ABRIL' },
      { name: 'SANTA CRUZ ' },
      { name: 'PUEBLO NUEVO' },
      { name: 'VILLA MAJEGA I' },
      { name: 'VILLA MAJEGA II' }
    ]
  },
  {
    name: 'LA ALTAGRACIA',
    centers: [
      { name: 'HOSPITAL DOCTOR EVANGELINA RODRIGUEZ' },
      { name: 'MULTIUSO' },
      { name: 'AEROPUERTO INTERNACIONAL PUNTA CANA' }
    ]
  },
  {
    name: 'AZUA',
    centers: [
      { name: 'HOSPITAL TAIWAN' },
      { name: 'PRADO Y COLONIA (CPN)' },
      { name: 'UNAP LA CUCHILLA' },
      { name: 'UNAP BOMBITA' },
      { name: 'UNAP LOS PARCELEROS' },
      { name: 'CENTRO DE SALUD FINCA 6' },
      { name: 'UNAP LOS JOVILLOS' },
      { name: 'UNAP VILLA CORAZON DE JESUS' },
      { name: 'UNAP EL BARRO' },
      { name: 'LOS JOVILLOS' },
      { name: 'CLINICA RURAL ANSONIA' },
      { name: 'CLINICA RURAL LAS BARIAS' },
      { name: 'CLINICA RURAL BARRERAS' },
      { name: 'CLINICA RURAL LOS NEGROS' },
      { name: 'CLINICA RURAL SABANA YEGUA' },
      { name: 'UNAP SAN FRANCISCO' },
      { name: 'CLINICA RURAL PROYECTO-4 YSURA' },
      { name: 'CLINICA RURAL PROYECTO-2-C' },
      { name: 'UNAP GANADERO BARRIO LOS TECNICOS' },
      { name: 'CLINICA RURAL LAS YAYAS' },
      { name: 'UNAP LAS YAYAS ARRIBA' },
      { name: 'CLINICA RURAL VIAJAMA' },
      { name: 'CLINICA RURAL MAGUEYAL' },
      { name: 'CLINICA RURAL HATO NUEVO' },
      { name: 'CLINICA RURAL VILLARPANDO' },
      { name: 'CLINICA RURAL LAS CHARCAS' },
      { name: 'CLINICA RURAL HATILLO' },
      { name: 'CLINICA RURAL PALMAR DE OCOA' },
      { name: 'CLINICA RURAL ESTEBANIA' },
      { name: 'UNAP PUEBLO VIEJO' },
      { name: 'CLINICA RURAL EL ROSARIO' },
      { name: 'LICEO GUAYACANAL' },
      { name: 'UNAP EL HIGUERO' },
      { name: 'CLINICA RURAL EL CARRIZAL' },
      { name: 'UNAP LOS JOBOS -2' },
      { name: 'UNAP LOS JOBOS -1' },
      { name: 'UNAP MAJAGUAL' },
      { name: 'CLINICA RURAL TABARA ARRIBA' },
      { name: 'CLINICA RURAL TABARA ABAJO' },
      { name: 'CLINICA RURAL SAJANOA' },
      { name: 'CLINICA RURAL LOS TOROS' },
      { name: 'CLINICA RURAL AMIAMA GOMEZ' },
      { name: 'HOSPITAL MUNICIPAL PERALTA' },
      { name: 'CLINICA RURAL MONTE BONITO' },
      { name: 'CLINICA RURAL LA SIEMBRA' },
      { name: 'CLINICA RURAL LAS LAGUNAS' },
      { name: 'UNAP SANTA ANA' },
      { name: 'UNAP VILLA OCOA' },
      { name: 'UNAP CAÑITA -A' },
      { name: 'UNAP LOS MONTES FRIOS' },
      { name: 'HOSPITAL MUNICIPAL GUAYABAL' },
      { name: 'PUESTO DE GOBERNACION' },
      { name: 'PUESTO CENTRO DIAGNOSTICO' },
      { name: 'SUPERMERCADO  DIVERSO' },
      { name: 'DISTRITO ESCOLAR 03-01' },
      { name: 'CENTRO DE ATENCION A CLIENTES CLARO' }
    ]
  },
  {
    name: 'EL SEIBO',
    centers: [
      { name: 'CLUB DE BOMBEROS' },
      { name: 'CTC' },
      { name: 'CENTRO CAMPESINO' },
      { name: 'IGLESIA BETEL' },
      { name: 'PARQUE' },
      { name: 'UNAP VILLA GUERRERO' },
      { name: 'HOSPITAL DOCTOR TEOFILO HERNADEZ' },
      { name: 'DEFENSA CIVIL' },
      { name: 'AYUNTAMIENTO MUNICIPAL' },
      { name: 'PALACIO DE JUSTICIA' },
      { name: 'BANCO DE RESERVAS CARIBE EXPRESS' },
      { name: 'ASOTRASEY' },
      { name: 'CTC MICHES' },
      { name: 'HOTEL ATABEY' }
    ]
  },
  {
    name: 'ELIAS PIÑA',
    centers: [
      { name: 'CENTRO DE COMBATE' },
      { name: 'CPN GUANITO' },
      { name: 'CPN GUAYABO' },
      { name: 'CPN HATO VIEJO' },
      { name: 'CPN JUAN SANTIAGO' },
      { name: 'CPN LA GALLERA' },
      { name: 'CPN LAS DELICIAS ' },
      { name: 'CPN LAS PALMAS' },
      { name: 'CPN MACASIAS' },
      { name: 'CPN PEDRO SANTANA' },
      { name: 'CPN PINZON' },
      { name: 'CPN POTROSO' },
      { name: 'CPN RANCHO DE LA GUARDIA' },
      { name: 'CPN RINCONCITOS' },
      { name: 'CPN ROSA LA PIEDRA' },
      { name: 'CPN SABANA CRUZ' },
      { name: 'CPN SABANA HIGUERO' },
      { name: 'CPN SABANA LARGA' },
      { name: 'CPN SABANA MULA' },
      { name: 'CENTRO TECNOLOGICO COMUNITARIO (CTC)' },
      { name: 'HOSPITAL DE BANICA' },
      { name: 'HOSPITAL ROSA DUARTE' },
      { name: 'POLIDEPORTIVO' }
    ]
  },
  {
    name: 'INDEPENDENCIA',
    centers: [
      { name: 'CPN SAN JOSE' },
      { name: 'CPN BOCA DE CACHON' },
      { name: 'CPN MELLA' },
      { name: 'CPN BATEY 8' },
      { name: 'CPN COLONIA MIXTA' },
      { name: 'CPN GUAYABAL' },
      { name: 'CPN EL LIMON' },
      { name: 'CPN TIERRA NUEVA' },
      { name: 'CPN CRISTOBAL' },
      { name: 'CPN DESCUBIERTA' },
      { name: 'HOSPITAL GENERAL MELENCIANO' },
      { name: 'CPN POSTER RIO' },
      { name: 'CPN PLACER BONITO' },
      { name: 'DPS INDEPENDENCIA' },
      { name: 'HOSPITAL JOSE PEREZ' }
    ]
  },
  {
    name: 'HERMANAS MIRABAL',
    centers: [
      { name: 'LICEO EMILIANO TEJERA' },
      { name: 'CUERPO DE BOMBEROS' },
      { name: 'PERSONAL COOPERATIVA LA UNION' },
      { name: 'UNAP EL RANCHO' },
      { name: 'CENTRO COMUNAL RANCHO ARRIBA' },
      { name: 'POLIDEPORTIVO' },
      { name: 'UNAP LOS CACAOS' },
      { name: 'ESCUELA FEDERICO AUGUSTO GONZALES' },
      { name: 'UNAP EL TABLON' },
      { name: 'CLUB LA CUARENTA' },
      { name: 'UNAP EL COCO' }
    ]
  },
  {
    name: 'MONTE PLATA',
    centers: [
      { name: 'ESCUELA MERIÑO' },
      { name: 'UNAP DON JUAN' },
      { name: 'CPN 5 CASAS' },
      { name: 'HOSPITAL SANTO CRISTO' },
      { name: 'CPN GUANICO' },
      { name: 'CUERPO DE BOMBEROS' },
      { name: 'HOSPITAL MUNICIPAL DE YAMASA' },
      { name: 'CPN ANTONCI' },
      { name: 'CPN LA COLORADA' },
      { name: 'CPN SAN ANTONIO' },
      { name: 'CPN LOS BOTADOS' },
      { name: 'CPN CHACARO' },
      { name: 'CPN HATO VIEJO' },
      { name: 'HOSPITAL DOCTOR PEDRO HEREDIA ROJAS' },
      { name: 'BANCO DE RESERVAS' }
    ]
  },
  {
    name: 'SANCHEZ RAMIREZ',
    centers: [
      { name: 'AYUNTAMIENTO DE QUITA SUEÑO' },
      { name: 'BAJO TECHO' },
      { name: 'BARRIO LINDO' },
      { name: 'CASA DEL ESPIRITU SANTO' },
      { name: 'CENTRO DE DIAGNOSTICO' },
      { name: 'CENTRO DE DIAGNOSTICO FANTINO' },
      { name: 'CENTRO VISION COTUI' },
      { name: 'CLINICA DR. NEY' },
      { name: 'CLUB 4 DE JULIO' },
      { name: 'CLUB DE AMAS DE CASA PEDRO FRANCISCO BONO' },
      { name: 'CLUB DE BOXEO HICACO' },
      { name: 'CLUB DEL COLEGIO MEDICO' },
      { name: 'CLUB ROTARIO COTUI' },
      { name: 'CONSULTORIO INMACULADA CONCEPCION' },
      { name: 'CPN ARENOSO' },
      { name: 'CPN ATALAYA' },
      { name: 'CPN BARRAQUITO' },
      { name: 'CPN BATERO' },
      { name: 'CPN CABALLERO' },
      { name: 'CPN CASTILLO' },
      { name: 'CPN COMEDERO ABAJO' },
      { name: 'CPN COMEDERO ARRIBA' },
      { name: 'CPN CRUZ DE ANGELINA' },
      { name: 'CPN DOS PALMAS' },
      { name: 'CPN DUEY' },
      { name: 'CPN EL BAQUETAZO' },
      { name: 'CPN EL LIMON' },
      { name: 'CPN EL LIMONCITO' },
      { name: 'CPN EL PESCOZON' },
      { name: 'CPN HERNANDO ALONZO' },
      { name: 'CPN LA ALTAGRACIA' },
      { name: 'CPN LA ALTAGRACIA DE FANTINO ' },
      { name: 'CPN LA ATALAYA' },
      { name: 'CPN LA BIJA' },
      { name: 'CPN LA ESTANCIA ' },
      { name: 'CPN LA PLACETA' },
      { name: 'CPN LA SOLEDAD' },
      { name: 'CPN LAS CANAS' },
      { name: 'CPN LOS CASTELLANOS' },
      { name: 'CPN PIÑA VIEJA' },
      { name: 'CPN PLATANAL' },
      { name: 'CPN PUEBLO NUEVO' },
      { name: 'CPN SABALLO' },
      { name: 'CPN SIERRA PRIETA' },
      { name: 'CPN VILLA LA MATA' },
      { name: 'CPN ZAMBRANA' },
      { name: 'DAYBE DENTAL ' },
      { name: 'DEFENSA CIVIL' },
      { name: 'ESCUELA LOS POMOS ' },
      { name: 'HOSPITAL DE CEVICOS' },
      { name: 'HOSPITAL DE VILLA LA MATA' },
      { name: 'HOSPITAL DR. RAMON BAEZ' },
      { name: 'HOSPITAL INMACULADA CONCEPCION' },
      { name: 'LA GRAN ARENA' },
      { name: 'LOS COROZOS ' },
      { name: 'PLAN PILOTO' },
      { name: 'SALON PARROQUIAL' },
      { name: 'UNAP LA CUEVA ' },
      { name: 'UTECO' }
    ]
  },
  {
    name: 'VALVERDE',
    centers: [
      { name: 'DPS VALVERDE' },
      { name: 'CLUB DE LEONES' },
      { name: 'COLEGIO MEDICO' },
      { name: 'CLUB ROTARIO' },
      { name: 'CLUB QUISQUELLA' },
      { name: 'PARROQUIA MARÍA AUXILIADORA, MAO' },
      { name: 'UNAP GUATAPANAL' },
      { name: 'UNAP BAHORUCO' },
      { name: 'UNAP LAS TRESCIENTAS' },
      { name: 'UNAP SAN ANTONIO' },
      { name: 'UNAP EL SAMAN' },
      { name: 'UNAP LAS CUARENTA' },
      { name: 'UNAP LA MINA' },
      { name: 'UNAP LOS QUEMADOS' },
      { name: 'UNAP JINAMAGAO' },
      { name: 'UNAP LOS RESTAURADORES' },
      { name: 'CLUB DEL CERRO DE ESPERANZA' },
      { name: 'HOSPITAL DE ESPERANZA DR. JOSÉ FAUSTO OVALLES' },
      { name: 'CLINICA DR. MONTESINO' },
      { name: 'UNAP JICOME' },
      { name: 'UNAP MAIZAL' },
      { name: 'UNAP DAMAJAGUA' },
      { name: 'UNPA BARRIO NORTE' },
      { name: 'UNAP D\' CLASE' },
      { name: 'UNAP ENRIQUILLO' },
      { name: 'UNAP BARRIO SUR' },
      { name: 'UNAP VILLA MUÑOZ' },
      { name: 'UNPA CENTRO LAGUNA SALADA' },
      { name: 'UNAP JAIBON' },
      { name: 'UNAP CRUCE DE GUAYACANES' }
    ]
  },
  {
    name: 'HATO MAYOR',
    centers: [
      { name: 'HOSPITAL MUNICIPAL EL VALLE' },
      { name: 'HOSPITAL SEÑORA ELUPINA CORDERO' },
      { name: 'UNAP BARRIO LINDO' },
      { name: 'UNAP GUALEY' },
      { name: 'UNAP GUAYABO DULCE' },
      { name: 'UNAP LA JAVILLA' },
      { name: 'UNAP LAS CAÑITAS' },
      { name: 'UNAP LAS GUAMAS' },
      { name: 'UNAP LAS YAGUITAS' },
      { name: 'UNAP LOS HATILLOS' },
      { name: 'UNAP MANCHADO' },
      { name: 'UNAP PUERTO RICO' },
      { name: 'UNAP PUNTA DE GARZA' },
      { name: 'UNAP VILLA CANTO' },
      { name: 'UNAP VILLA NAVARRO' },
      { name: 'UNAP VILLA ORTEGA' },
    ]
  },
  {
    name: 'MONSEÑOR NOUEL',
    centers: [
      { name: 'UNIDAD DE ATENCION PRIMARIA LOS ARROCES' },
      { name: 'UNIDAD DE ATENCION PRIMARIA SABANA DEL PUERTO' },
      { name: 'UNIDAD DE ATENCION PRIMARIA JAYACO' },
      { name: 'UNIDAD DE ATENCION PRIMARIA EL VERDE' },
      { name: 'UNIDAD DE ATENCION PRIMARIA JUMA' },
      { name: 'UNIDAD DE ATENCION PRIMARIA LOS QUEMADOS' },
      { name: 'UNIDAD DE ATENCION PRIMARIA SONADOR' },
      { name: 'UNIDAD DE ATENCION PRIMARIA RINCON DE YUBOA' },
      { name: 'UNIDAD DE ATENCION PRIMARIA JUAN ADRIAN' },
      { name: 'UNIDAD DE ATENCION PRIMARIA MAXIMO GOMEZ' },
      { name: 'HOSPITAL DOCTOR JOSE A COLUNMA (IDDS)' },
      { name: 'UNIDAD DE ATENCION PRIMARIA NUESTRA SRA DE FATIMA' },
      { name: 'IGLESIA SAN PEDRO SAN PABLO' },
      { name: 'CLINICA POLICLINICO BONAO' },
      { name: 'CRUCE UASD BONAO' },
      { name: 'SALON LA LIRA DISTRITO 16-04' },
      { name: 'HOSPITAL MUNICIPAL PIEDRA BLANCA' },
      { name: 'HOSPITAL MUNICIPAL DE MAIMON' },
      { name: 'ZONA FRANCA DOS RIOS' },
      { name: 'FALCONDO' }
    ]
  },
  {
    name: 'SAN PEDRO DE MACORIS',
    centers: [
      { name: 'SALON DE LA CULTURA AYUNTAMIENTO MUNICIPAL' },
      { name: 'GOBERNACION PROVINCIAL' },
      { name: 'CAPILLA SAGRADO CORAZON  DE JESUS' },
      { name: 'LOCAL DE LOS BOMBEROS' },
      { name: 'MEDSORB DOMINICANA' },
      { name: 'MONTE DE SION' },
      { name: 'GREMIO DE LOS MUELLEROS' },
      { name: 'CLINICA DOCTOR DE LEON' },
      { name: 'UCE' },
      { name: 'DEFENSA CIVIL' },
      { name: 'CLUB DE PERIODISTA' },
      { name: 'CLUB 26 DE FEBRERO' },
      { name: 'MULTIUSO - EXTENSION UASD' },
      { name: 'DPS SAN PEDRO DE MACORIS' },
      { name: 'MULTIUSO' },
      { name: 'IGLESIA ASAMBLEA DE DIOS, JUAN DOLIÓ' },
      { name: 'IGLESIA CATOLICA, LOS CONUCOS' },
      { name: 'IGLESIA DE DIOS, GUAYACANES' },
      { name: 'IGLESIAS ASAMBLEAS DE DIOS ADONAI' },
      { name: 'UNAP PORVENIR' },
      { name: 'CLUB DE LEONES' },
      { name: 'IGLESIA CIRCULO DE ORACION' },
      { name: 'CENTRO COMUNAL PUNTA PESCADORA' },
      { name: 'AYUNTAMIENTO MUNICIPAL' }
    ]
  },
  {
    name: "LA VEGA",
    centers: [
      { name: "HOSPITAL OCTAVIA GAUTIER" },
      { name: "CENTRO DE SALUD OBRA SOCIAL SALESIANA" },
      { name: "BELARMINIO RAMIREZ E HIJOS" },
      { name: "CPN OCTAVIA GAUTIER" },
      { name: "CPN PASO BAJITO" },
      { name: "CPN EL BALCON" },
      { name: "CPN JUMUNUCO" },
      { name: "CPN MANABAO" },
      { name: "CPN BUENA VISTA" },
      { name: "CPN LIMONAL" },
      { name: "CPN HATILLO" },
      { name: "CPN PIEDRA BLANCA" },
      { name: "CPN NARANJAL" },
      { name: "CPN RIO SECO" },
      { name: "CPN SANTO CERRO" },
      { name: "CPN SOTO" },
      { name: "CPN LA LIMA" },
      { name: "CPN POCILGAS" },
      { name: "CPN GUACO" },
      { name: "CPN LA TORRE" },
      { name: "CPN BURENDE" },
      { name: "CPN EL MAMEY" },
      { name: "CPN GINA HUECA" },
      { name: "CPN NIBAJE" },
      { name: "CPN EL TANQUE" },
      { name: "CPN DON BOSCO" },
      { name: "CPN MARIA AUXILIADORA" },
      { name: "CPN DON FAUSTO" },
      { name: "CPN GUAREY" },
      { name: "CPN CENTRO EL CARMEN" },
      { name: "CPN BAYACANES" },
      { name: "CPN SAN MIGUEL" },
      { name: "CPN EL HIGUERO" },
      { name: "CPN PONTON" },
      { name: "CUB DE ABOGADOS" },
      { name: "DEFENSA CIVIL" },
      { name: "CUERPO DE BOMBEROS" },
      { name: "COOPERATIVA VEGA REAL" },
      { name: "HOSPITAL JIMA ABAJO" },
      { name: "HOSPITAL JUAN ANTONIO CASTILLO" },
      { name: "HOSPITAL MORILLO KING" },
      { name: "POLICLINICO LA VEGA" },
      { name: "CENTRO MEDICO PADRE FANTINO" },
      { name: "CLINICA LA CONCEPCION" },
      { name: "CENTRO DE DIAGNOSTICO" },
      { name: "CPN LA SABINA" },
      { name: "CPN ARROYO ARRIBA" },
      { name: "CPN TIREO" },
    ],
  }
];

centros.sort((a, b) => (a.name < b.name ? -1 : 1));
