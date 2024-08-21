const greenMarket = "GreenMarket";
const eduPath = "EduPath";
const travelTales = "TravelTales";

export function changeColor(activity){
    if (activity == greenMarket) {
        return "viola"
    } else if (activity == eduPath) {
        return "verde"
    } else if (activity == travelTales) {
        return "arancione"
    }
}
