# Malibu-Point-HA
Home-Assistant Configuration for the Malibu Point infrastructure.
![Image of Malibu Point](https://github.com/FrostTusk/Malibu-Point-HA/blob/master/Malibu-Point.png)

## Naming System
Malibu Point makes use of an unusual naming system, this is mostly because I oftentimes make completely custom components or use devices that aren't typically used in a smart home.
The Naming System is based on animal taxonomy.
* Amphibians are either salamanders (off-the-shelf IoT Device) or frogs (custom built IoT)
* Mammals represent "servers" or "workstations". Basically more traditional computing devices.
* Sea Creatures are network devices (routers, switches, etc.).
* Reptilians are storage devices.
* Birds are mobile devices.

## Devices
1. taricha
2. hyla
3. acris
4. amnirana
5. ursus
6. ailurus
7. panthera
8. hyaena
9. litoria

## UI Integrations
1. Google Cast:
  * hyla
  * acris
2. Internet Printing Protocol (IPP)
  * litoria
  * litoria-auto-fax
  * litoria-auto-print
  
3. Coronavirus (COVID-19)

## Installing and Updating Home Assistant via docker
```
(For Installing, only steps 3 and 4 are important)
1. docker stop home-assistant
2. docker rm home-assistant
3. docker pull homeassistant/home-assistant
4. docker run -d --network=host --name home-assistant -v <path_to_config_folder>:/config  homeassistant/home-assistant
```
