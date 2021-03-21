import { v4 as uuidv4 } from "uuid";

function jobs() {
  return [
    {
      dateInit: "August 2016",
      dateEnd: "September 2016",
      job: "Design Assistant",
      company: "080",
      description:
        "Ayudante en la línea de diseño de punto de la colección Samuel Alarcón.",
      id: uuidv4(),
      isLast: false,
    },
    {
      dateInit: "September 2017",
      dateEnd: "July 2018",
      job: "Design Assistant",
      company: "Aitana Baeza",
      description: "Ayudante en diseño de prenda de punto y plana.",
      id: uuidv4(),
      isLast: false,
    },
    {
      dateInit: "March 2019",
      dateEnd: "July 2019",
      job: "Fashion Stylist & Art Direction",
      company: "Outsiders Division",
      description: "Realización de Fashion Film y Shooting para la marca.",
      id: uuidv4(),
      isLast: false,
    },
    {
      dateInit: "September 2019",
      dateEnd: "January 2020",
      job: "Fashion Stylist",
      company:
        "Agencias de Modelos (Blow Models, Trend Models Management, View Management, Fifth Models y Nass)",
      description: "Estilista para los books de los modelos.",
      id: uuidv4(),
      isLast: false,
    },
    {
      dateInit: "January 2020",
      dateEnd: "February 2020",
      job: "Fashion Stylist",
      company: "Fucking Young",
      description:
        "Estilista para los books de los modelos, fuckingyoung.es/36-degrees",
      id: uuidv4(),
      isLast: false,
    },
    {
      dateInit: "March 2019",
      dateEnd: "March 2021",
      job: "Accesories Designer",
      company: "Outstock Belts S.A",
      description: "Hago Accesorios",
      id: uuidv4(),
      isLast: false,
    },
    {
      dateInit: "February 2021",
      dateEnd: "April 2021",
      job: "Community Manager",
      company: "Kactus",
      description: "Community Manager doing blubliblablus",
      id: uuidv4(),
      isLast: false,
    },
    {
      dateInit: "February 2021",
      dateEnd: "Present",
      job: "Project Manager",
      company: "Marina Racewear",
      description: "Leading the Team Ware project and design it",
      id: uuidv4(),
      isLast: true,
    },
    //ADD MORE HERE
  ];
}

export default jobs;
