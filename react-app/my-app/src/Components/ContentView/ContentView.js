import React, { Component } from 'react';
import { Link } from 'react-router';
import "./ContentView.css";

class ContentView extends Component {
  render() {
    return (
      <div className="ContentView">
        <Link className="detail_back" to="/list"></Link>
        <h4 className="detail_title">Umbau vor Lärmschutztunnel auf A7 geht weiter - weitere Vollsperrung</h4>
        <button className="detail_fav" type="button"></button>
        <p className="detail_date">11. April 2019</p>
        <p className="detail_agency">DPA - LNO</p>
        <img className="detail_img" alt="Beispielbild" src="https://images.unsplash.com/photo-1506951796365-405279289a75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
        <p className="detail_text">Der Verkehr auf der A7 in Hamburg-Stellingen soll ab Sonntag vollständig unter dem neuen Lärmschutzdeckel verschwinden. <br />Es gibt bislang aber nur die Tunnelröhre für die Richtungsfahrbahn Nord. Die Verlegung des Gegenverkehrs in den Tunnel ist aufwendig. Hamburg (dpa/lno) – Auf der A7 in Hamburg-Stellingen gehen die Arbeiten zur vollständigen Inbetriebnahme des Lärmschutztunnels weiter.<br /> In der Nacht zum Donnerstag wurden bei einer Vollsperrung der Fahrbahn in Richtung Süden schwere Betonwände umgestellt, die für Sicherheit im Baustellenbereich sorgen. Die Arbeiten seien reibungslos verlaufen, sagte Verkehrskoordinator Christian Merl. Es sind jedoch drei weitere nächtliche Vollsperrungen bis Sonntag erforderlich. Die nächste sollte am Donnerstagabend (20.00 Uhr) beginnen. Zwischen Eidelstedt und Stellingen müssen Autofahrer dann wieder einer Umleitung über die parallel verlaufende B4 (Holsteiner Chaussee/Kieler Straße) folgen. Der Verkehr in Richtung Norden fließt bereits seit Mittwoch durch den knapp 900 Meter langen Tunnel. Die Verlegung dieser Fahrbahn war in nur einer Nacht möglich, weil die fertiggestellte erste Röhre auf der Richtungsfahrbahn Nord liegt. Für den Verkehr in Richtung Süden müssen Mittelstreifenüberfahrten hergestellt werden, die in und aus dem Tunnel führen. Besonders aufwendig sei die Ausfahrt aus der Röhre, denn zahlreiche Pendler aus dem Norden wollten direkt hinter dem südlichen Tunnelportal in Stellingen abfahren, erläuterte Merl. Der übrige Verkehr in Richtung Hannover/Bremen müsse auf die neu gebaute Langenfelder Brücke geleitet werden, wobei ein Höhenunterschied zu überwinden sei. Bis zur Fertigstellung der zweiten Tunnelhälfte Ende nächsten Jahres werden sich die Autofahrer die erste Röhre ab Sonntag im Gegenverkehr teilen müssen.</p>
        <h6 className="detail_author">Bernhard Sprengel</h6>
        <h6 className="detail_tags" >Tags: Verkehr, Hamburg</h6>
      </div>
    );
  }
}

export default ContentView;