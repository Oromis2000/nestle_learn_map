Vue.createApp({
  data() {
    return {
      isLoaded: false,
      showMore: {
        hidden: true,
        name: "",
        internal: [],
        external: [],
      },
      content: [
        /*General*/ {
          name: "#general",
          id: "general",
          internalShort: [],
          externalShort: [],
          internal: [
            {
              url: "https://www.nestle.com/sites/default/files/2020-12/nestle-net-zero-roadmap-en.pdf",
              text: "Nestlé Net Zero Roadmap",
            },
            {
              url: "https://www.nestle.com/sites/default/files/2021-03/creating-shared-value-report-2020-en.pdf",
              text: "CSV & Sustainability report 2020",
            },
          ],
          external: [
            {
              url: "https://www.youtube.com/playlist?list=PLXT_ozykGVam5GxAFZFusKqR_0zkEoBif",
              text: "Summit 21 (EMF)",
            },
            {
              url: "https://www.unep.org/interactive/emissions-gap-report/2020/",
              text: "Emissions Gap Report 2020 (UNEP)",
            },
            {
              url: "https://www.hra-o-zemi.cz/",
              text: "Vaše ekologická stopa (GreenCircle)",
            },
            {
              url: "https://www.youtube.com/watch?v=ipVxxxqwBQw",
              text: "Who Is Responsible? (Kurzgesagt)",
            },
            {
              url: "https://www.wri.org/insights/interactive-chart-shows-changes-worlds-top-10-emitters",
              text: "World's Top 10 Emitters (WRI)",
            },
            {
              url: "https://www.youtube.com/watch?v=wbR-5mHI6bo",
              text: "Is It Too Late? (Kurzgesagt)",
            },
            {
              url: "https://www.wri.org/insights/what-does-net-zero-emissions-mean-6-common-questions-answered",
              text: "What Does Net-Zero Mean? (WRI)",
            },
            {
              url: "https://ourworldindata.org/grapher/annual-co2-emissions-per-country?tab=chart&country=~OWID_WRL&region=World",
              text: "Annual CO₂ emissions (OurWorldInData)",
            },
            {
              url: "https://carbonpricingdashboard.worldbank.org/map_data",
              text: "Carbon pricing (TheWorldBank)",
            },
            {
              url: "https://ourworldindata.org/grapher/temperature-anomaly?time=earliest..latest",
              text: "Average temperature (OurWorldInData)",
            },
            {
              url: "https://ourworldindata.org/atmospheric-concentrations",
              text: "Atmospheric concentrations of GHG (OurWorldInData)",
            },
            {
              url: "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf",
              text: "Climate change summary (IPCC)",
            },
            {
              url: "https://apps.who.int/iris/bitstream/handle/10665/204585/9789241565196_eng.pdf",
              text: "Environmental health risks (WHO)",
            },
            {
              url: "https://unfccc.int/sites/default/files/resource/28_EASAC%20Report%20on%20Negative%20Emission%20Technologies.pdf",
              text: "Negative emission technologies (EASAC)",
            },
            {
              url: "https://www.wri.org/insights/6-ways-remove-carbon-pollution-sky",
              text: "6 Ways to Remove Carbon Pollution (WRI)",
            },
          ],
        },
        /*Energy*/ {
          name: "#energy",
          id: "energy",
          internalShort: [],
          externalShort: [],
          internal: [
            {
              url: "https://web.microsoftstream.com/video/2e76e20e-43e4-4b0a-bb70-88c75aa4b011",
              text: "Energie a její alternativní zdroje",
            },
          ],
          external: [
            {
              url: "https://ourworldindata.org/safest-sources-of-energy",
              text: "Safest and cleanest sources (OurWorldInData)",
            },
            {
              url: "https://www.ucsusa.org/resources/smart-energy-solutions-improve-energy-efficiency",
              text: "Smart Energy Solutions (UCSUSA)",
            },
            {
              url: "https://www.wri.org/insights/3-reasons-invest-renewable-energy-now",
              text: "3 Reasons to Invest in Renewable Energy (IEA)",
            },
            {
              url: "https://www.youtube.com/watch?v=EhAemz1v7dQ",
              text: "Do we Need Nuclear Energy? (Kurzgesagt)",
            },
            {
              url: "https://www.youtube.com/watch?v=Jzfpyo-q-RM",
              text: "Energy Death Toll (Kurzgesagt)",
            },
            {
              url: "https://ourworldindata.org/energy-mix",
              text: "Global energy mix (OurWorldInData)",
            },
            {
              url: "https://www.iea.org/reports/energy-efficiency-2019",
              text: "Energy efficiency trends (IEA)",
            },
            {
              url: "https://ourworldindata.org/grapher/carbon-dioxide-emissions-factor",
              text: "Emissions per MWh (OurWorldInData)",
            },
            {
              url: "https://ourworldindata.org/grapher/global-primary-energy",
              text: "Energy consumption by source (OurWorldInData)",
            },
          ],
        },
        /*Technology*/ {
          name: "#technology",
          id: "technology",
          internalShort: [],
          externalShort: [],
          internal: [
            {
              url: "https://www.nestle.com/stories/nestle-breakthrough-coffee-breeding-low-carbon-drought-resistant-varieties",
              text: "A breakthrough in coffee breeding",
            },
          ],
          external: [
            {
              url: "https://www.iea.org/reports/global-ev-outlook-2019",
              text: "Global EV Outlook (IEA)",
            },
            {
              url: "https://www.infineon.com/cms/en/discoveries/electromobility/",
              text: "What you need to know about electromobility (Infineon)",
            },
            {
              url: "https://www.wri.org/insights/everything-you-need-know-about-fastest-growing-source-global-emissions-transport",
              text: "Fastest-Growing Emission Source: Transport (WRI)",
            },
            {
              url: "https://www.youtube.com/watch?v=C_BK7PRugK4",
              text: "Aviation fuel problem (Real Engineering)",
            },
            {
              url: "https://cc.cz/plastove-lahve-nove-generace-loreal-nestle-i-pepsi-si-je-nechaly-vyvinout-z-petu-recyklovaneho-pomoci-enzymu/",
              text: "Plastové lahve nové generace (CzechCrunch)",
            },
            {
              url: "https://blockheadtechnologies.com/how-blockchain-is-revolutionising-food-supply-chains/",
              text: "Blockchain food supply chains (Blockhead)",
            },
            {
              url: "https://www.youtube.com/watch?v=6w78-aSTIDY",
              text: "Battery recycling (Undecided)",
            },
            {
              url: "https://www.youtube.com/watch?v=ecxCL84n26g",
              text: "Carbon Capture (Real Engineering)",
            },
            {
              url: "https://www.fairphone.com/en/",
              text: "Most sustainable smartphone (Fairphone)",
            },
          ],
        },
        /*Circular economy*/ {
          name: "#circular<br />economy",
          id: "circular",
          internalShort: [],
          externalShort: [],
          internal: [
            {
              url: "https://nlms.csod.com/ui/lms-learning-details/app/curriculum/15fa55e3-3c5d-42dc-a729-4b80e21a1c2e",
              text: "Sustainable Packaging Fundamentals",
            },
            {
              url: "https://nlms.csod.com/ui/lms-learning-details/app/material/07df04da-f817-4091-94a5-5c6b76c05c51",
              text: "The Rules of Sustainable Packaging",
            },
            {
              url: "#",
              text: "SortApp",
            },
          ],
          external: [
            {
              url: "https://www.ellenmacarthurfoundation.org/circular-economy/what-is-the-circular-economy",
              text: "What is a circular economy? (EMF)",
            },
            {
              url: "https://www.wri.org/insights/how-build-circular-economy",
              text: "How to Build a Circular Economy (WRI)",
            },
            {
              url: "https://www.youtube.com/watch?v=aqeulFxqT1Y&t=1s",
              text: "New plastics economy (EMF)",
            },
            {
              url: "https://emf.thirdlight.com/link/agyt3es34kjy-k2qe8a/@/preview/1?o",
              text: "Upstream Innovation Guide (EMF)",
            },
            {
              url: "https://greenerideal.com/news/environment/0703-7-amazing-recycling-facts/",
              text: "7 amazing recycling facts (Greener Ideal)",
            },
            {
              url: "https://recycled-papers.co.uk/green-matters/why-use-recycled-papers/use-less-water",
              text: "Why use recycled papers (Arjowiggins)",
            },
            {
              url: "https://zijudrzitelne.bezobalu.org/",
              text: "Žij Udržitelně (Bezobalu)",
            },
            {
              url: "https://www.wired.co.uk/article/coffee-pods-nespresso-recycling",
              text: "Coffee pods impact (WIRED)",
            },
            {
              url: "https://forbes.cz/odpad-zdrojem-cirkularni-ekonomika-je-cesta-z-krize-rikaji-jeji-propagatori/",
              text: "Cirkulární ekonomika je cesta z krize (Forbes)",
            },
            {
              url: "https://www.wri.org/insights/4-ways-reduce-plastic-pollution",
              text: "4 Ways to Reduce Plastic Pollution (WRI)",
            },
            {
              url: "https://www.youtube.com/watch?v=KXRtNwUju5g",
              text: "Broken recycling system (Wendover)",
            },
          ],
        },
        /*Food waste*/ {
          name: "#food waste",
          id: "foodwaste",
          internalShort: [],
          externalShort: [],
          internal: [
            {
              url: "http://thenest-eur-hq.nestle.com/NE/CI/Pages/2021-cool-food-pledge.aspx",
              text: "Tackling climate change from our plates",
            },
            {
              url: "https://nestle.workplace.com/groups/441519522948550/permalink/1176568986110263/",
              text: "Food waste = Water waste",
            },
          ],
          external: [
            {
              url: "https://zachranjidlo.cz/",
              text: "Jak neplýtvat jídlem (ZachraňJídlo)",
            },
            {
              url: "https://foodprint.org/issues/the-problem-of-food-waste/",
              text: "Food waste - general info (FoodPrint)",
            },
            {
              url: "https://www.ellenmacarthurfoundation.org/explore/food-cities-the-circular-economy",
              text: "Food in the circular economy (EMF)",
            },
            {
              url: "https://www.ellenmacarthurfoundation.org/case-studies/a-plant-based-coating-that-reduces-food-waste",
              text: "Coating reducing food-waste (EMF)",
            },
            {
              url: "https://wedocs.unep.org/bitstream/handle/20.500.11822/35280/FoodWaste.pdf",
              text: "Food Waste Index Report 2021 (UNEP)",
            },
          ],
        },
        /*Animals*/ {
          name: "#animals",
          id: "animals",
          internalShort: [],
          externalShort: [],
          internal: [],
          external: [
            {
              url: "https://www.cbd.int/gbo/gbo5/publication/gbo-5-spm-en.pdf",
              text: "Global Biodiversity Outlook (UN)",
            },
            {
              url: "https://interactive.carbonbrief.org/what-is-the-climate-impact-of-eating-meat-and-dairy/",
              text: "Impact of eating meat and dairy (CarbonBrief)",
            },
            {
              url: "https://www.youtube.com/watch?v=NxvQPzrg2Wg",
              text: "Meat - the Best Worst Thing (Kurzgesagt)",
            },
            {
              url: "https://ourworldindata.org/food-emissions-carbon-budget",
              text: "Food emissions (OurWorldInData)",
            },
          ],
        },
        /*Agriculture*/ {
          name: "#agriculture",
          id: "agriculture",
          internalShort: [],
          externalShort: [],
          internal: [
            {
              url: "https://nlms.csod.com/ui/lms-learning-details/app/video/cef28cc2-abf3-4419-8060-a61c61e7253e",
              text: "Introduction to Regenerative Agriculture",
            },
          ],
          external: [
            {
              url: "https://www.youtube.com/watch?v=fSEtiixgRJI",
              text: "What is Regenerative Agriculture? (Jimi Sol)",
            },
            {
              url: "https://www.wri.org/insights/causes-and-effects-soil-erosion-and-how-prevent-it",
              text: "The Causes and Effects of Soil Erosion (WRI)",
            },
            {
              url: "https://www.wri.org/insights/how-sustainably-feed-10-billion-people-2050-21-charts",
              text: "Sustainably Feeding 10 Billion People (WRI)",
            },
          ],
        },
        /*Deforestation*/ {
          name: "#deforestation",
          id: "deforestation",
          internalShort: [],
          externalShort: [],
          internal: [
            {
              url: "https://www.nestlecocoaplan.com/sites/site.prod.nestlecocoaplan.com/files/2021-05/NCP_TDReport_FINAL%20APPROVED%20VERSION_%2004052021.pdf",
              text: "Tackling Deforestation Report 2021",
            },
          ],
          external: [
            {
              url: "https://ourworldindata.org/what-are-drivers-deforestation",
              text: "Drivers of deforestation (OurWorldInData)",
            },
            {
              url: "https://www.wri.org/insights/we-lost-football-pitch-primary-rainforest-every-6-seconds-2019",
              text: "Football Pitch of Rainforest is Lost Every 6 Seconds (WRI)",
            },
          ],
        },
        /*Business*/ {
          name: "#business",
          id: "business",
          internalShort: [],
          externalShort: [],
          internal: [
            {
              url: "https://www.nestle.com/stories/climate-change-action-not-philanthropy-ceo-mark-schneider-oped",
              text: "Climate change action is not philanthropy",
            },
            {
              url: "https://nlms.csod.com/ui/lms-learning-details/app/material/4b877569-0b43-4aec-82bb-b51324719547",
              text: "Carbon Offsetting",
            },
            {
              url: "https://nlms.csod.com/ui/lms-learning-details/app/video/214d38ba-86a2-4009-ac67-db097a1b2cf5",
              text: "Climate Sensitive Product Development",
            },
          ],
          external: [
            {
              url: "https://www.ey.com/cs_cz/climate-change-sustainability-services/udrzitelnost-vs-konzumerismus-proc-se-vyplati-neco-co-neprinasi-",
              text: "Udržitelnost vs. konzumerismus (Ernst&Young)",
            },
            {
              url: "https://assets.kpmg/content/dam/kpmg/xx/pdf/2020/11/the-time-has-come.pdf",
              text: "Survey of Sustainability Reporting (KMPG)",
            },
            {
              url: "https://www.wri.org/insights/corporate-financing-nature-based-solutions-what-next",
              text: "Corporate Financing of Nature Based Solutions (WRI)",
            },
            {
              url: "https://www.bcg.com/publications/2020/quest-sustainable-business-model-innovation",
              text: "Sustainable Business Model Innovation (BCG)",
            },
            {
              url: "https://www.eea.europa.eu/publications/a-framework-for-enabling-circular/a-framework-for-enabling-circular",
              text: "Framework for circular business models (EEA)",
            },
          ],
        },
      ],
    };
  },
  beforeMount() {
    this.content.forEach((item) => {
      item.internalShort = item.internal.slice(0, 12);
      item.externalShort = item.external.slice(0, 12);
    });
    this.isLoaded = true;
  },
  methods: {
    more(index) {
      this.showMore.name = this.content[index].name;
      this.showMore.internal = this.content[index].internal;
      this.showMore.external = this.content[index].external;
      this.showMore.hidden = false;
      document.body.style.overflowY = "hidden";
    },
    less() {
      document.body.style.overflowY = "scroll";
      this.showMore.hidden = true;
      this.showMore.internal = [];
      this.showMore.external = [];
    },
  },
}).mount("#app");
