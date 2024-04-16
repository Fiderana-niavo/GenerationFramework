package genesis;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;

public class Nouveau {
    private String imports;
    private String mappings;

    public String getImports() {
        return imports;
    }

    public void setImports(String imports) {
        this.imports = imports;
    }

    public String getMappings() {
        return mappings;
    }

    public void setMappings(String mappings) {
        this.mappings = mappings;
    }

    public String tableMaj(String nomtable) {
        return String.valueOf(nomtable.toCharArray()[0]).toUpperCase()
                + nomtable.substring(1, nomtable.toCharArray().length);
    }

    public String readFile(String path) throws Exception {
        File file = new File(path);

        BufferedReader reader = new BufferedReader(new FileReader(path));
        StringBuilder content = new StringBuilder();
        String line;

        while ((line = reader.readLine()) != null) {
            content.append(line).append("\n");
        }

        return String.valueOf(content);
    }

    public void rewriteFile(String path, String contenue) throws Exception {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(path))) {
            writer.write(contenue);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void changementAppMain(Entity[] entities, String nomprojet) throws Exception {
        String importation = new String();
        String mapping = new String();
        String liste = new String();

        for (Entity entity : entities) {
            importation = importation + "\n" + this.imports.replace("[nomtablemaj]", tableMaj(entity.getClassName()));
            mapping = mapping + "\n" + this.mappings.replace("[nomtablemin]", entity.getClassName().toLowerCase())
                    .replace("[nomtablemaj]", tableMaj(entity.getClassName()));
            liste = liste + this.generateListe(entity);
        }

        String filepath = nomprojet + "/web/src/main.jsx";
        String header = nomprojet + "/web/src/composants/Header.jsx";
        String Header = this.readFile(header);
        Header = Header.replace("[Projet Framework]", nomprojet);
        Header = Header.replace("[li]", liste);
        String contenue = this.readFile(filepath);
        contenue = contenue.replace("[importpage]", importation);
        contenue = contenue.replace("[mappinglienpage]", mapping);
        this.rewriteFile(filepath, contenue);
        this.rewriteFile(header, Header);
    }

    public String generateListe(Entity entity) throws Exception {
        String liste = new String();
        liste = "<li className=\"menu-item\"> \n"+
          " <Link to={\"/select"+entity.getClassName().toLowerCase()+"\"} className=\"menu-link menu-toggle\"> \n"+
            "   <div data-i18n=\"Authentications\">"+entity.getClassName()+"</div> \n"+
          " </Link> \n"+
        "</li> \n";
        return liste;
    }
 
}