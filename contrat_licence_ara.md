# Contrat de licence d'utilisateur final (CLUF) — Logiciel ARA

> **VERSION 0.6 — BROUILLON — à faire réviser par un avocat avant toute utilisation.**
> Les mentions entre crochets `[…]` restantes sont des informations à compléter après
> l'incorporation (dénomination, adresses) ou des points signalés pour l'avocat.
>
> Architecture confirmée : toutes les Données du Licencié demeurent locales; la génération
> de rapports s'effectue entièrement sur le Poste. L'envoi par courriel s'effectue via
> l'application de courriel du Licencié (article 7.4). Tous les choix d'affaires ont été
> tranchés. Le bail hors ligne est de trente (30) jours, aligné sur le code
> (`LEASE_TTL_SECS`, `src/licensing.rs`).

**Version :** 0.6 (brouillon)
**Date d'entrée en vigueur :** [date]

---

## Préambule

Le présent contrat de licence d'utilisateur final (le « **Contrat** ») est conclu entre
**[dénomination sociale complète de l'entreprise]**, ayant sa principale place d'affaires au
[adresse complète], Québec, Canada (le « **Concédant** »), et la personne physique ou morale
identifiée à la Commande ou, à défaut, la personne qui installe ou utilise le Logiciel
(le « **Licencié** »).

En passant une Commande, en cochant la case d'acceptation, en installant, en copiant, en
activant une Clé de licence ou en utilisant le Logiciel de quelque manière que ce soit, le
Licencié reconnaît avoir lu le présent Contrat, le comprendre et accepter d'être lié par ses
modalités. S'il n'accepte pas ces modalités, il ne doit pas installer ni utiliser le
Logiciel.

Lorsque le Licencié est une personne morale (p. ex. une clinique), la personne qui accepte
le présent Contrat déclare avoir l'autorité de lier le Licencié, et le Licencié s'engage à
faire respecter le présent Contrat par chacun de ses Utilisateurs autorisés.

---

## 1. Définitions

**« Logiciel »** : le logiciel ARA, comprenant le module d'audiogramme et le module de
rédaction de rapports, sa documentation, ainsi que toute mise à jour, mise à niveau ou
correction fournie par le Concédant.

**« Commande »** : le bon de commande, la page d'achat en ligne ou la confirmation d'achat
précisant notamment le nombre de Sièges souscrits et les frais d'Abonnement applicables.

**« Siège »** : une licence d'utilisation individuelle du Logiciel, associée à un (1)
Utilisateur autorisé et matérialisée par une Clé de licence.

**« Utilisateur autorisé »** : la personne physique désignée par le Licencié pour utiliser
un Siège. Le Licencié peut être son propre Utilisateur autorisé (professionnel exerçant à
son compte) ou désigner des membres de son personnel (clinique).

**« Clé de licence »** : le code alphanumérique délivré par le Concédant permettant
d'activer les Fonctions sous licence pour un Siège.

**« Fonctions gratuites »** : les fonctions du Logiciel accessibles sans Clé de licence,
notamment la saisie et la sauvegarde d'audiogrammes.

**« Fonctions sous licence »** : les fonctions du Logiciel nécessitant une Clé de licence
valide, notamment la génération de rapports.

**« Poste »** : un ordinateur ou appareil sur lequel le Logiciel est installé et une Clé de
licence activée.

**« Abonnement »** : le droit d'utiliser les Fonctions sous licence pour le nombre de
Sièges souscrits, pendant chaque Période d'abonnement payée, tel que décrit à l'article 4.

**« Période d'abonnement »** : la période mensuelle ou annuelle, selon la formule choisie
à la Commande, pour laquelle les frais d'Abonnement sont payés d'avance.

**« Données du Licencié »** : toutes les données saisies, importées ou générées par le
Licencié ou ses Utilisateurs autorisés au moyen du Logiciel, y compris les renseignements
relatifs aux patients.

---

## 2. Octroi de licence

2.1 Sous réserve du respect du présent Contrat et du paiement des frais d'Abonnement
applicables, le Concédant accorde au Licencié une licence **non exclusive, non transférable,
non cessible et révocable** d'installer et d'utiliser le Logiciel, pour ses propres besoins
professionnels internes, au Canada, pour le nombre de Sièges indiqué à la Commande.

2.2 **Portée d'un Siège.** Chaque Siège :

a) est réservé à l'usage d'**un (1) seul Utilisateur autorisé** désigné; l'utilisation d'un
même Siège par plus d'une personne est interdite;

b) peut être activé sur un maximum de **trois (3) Postes** utilisés par cet Utilisateur
autorisé, ce plafond étant appliqué par le système d'activation.

2.3 **Licences multiples (cliniques).** Un Licencié peut souscrire plusieurs Sièges sous
une même Commande. Le Licencié tient à jour la liste de ses Utilisateurs autorisés et
demeure responsable envers le Concédant du respect du présent Contrat par chacun d'eux,
comme s'il s'agissait de ses propres actes.

2.4 **Réassignation d'un Siège.** Le Licencié peut réassigner un Siège à un nouvel
Utilisateur autorisé (p. ex. départ ou remplacement d'un employé) en en faisant la demande
par courriel au soutien technique (article 8.2), au plus une (1) fois par période de
trente (30) jours par Siège. La réassignation entraîne la désactivation des Postes de
l'ancien Utilisateur autorisé.

2.5 **Fonctions gratuites.** Le Concédant permet l'utilisation des Fonctions gratuites sans
Clé de licence. Cette utilisation demeure néanmoins régie par le présent Contrat (notamment
les articles 3, 5, 6, 7, 8, 9, 10 et 12). Le Concédant peut modifier l'étendue des
Fonctions gratuites dans les versions futures du Logiciel.

2.6 Le Logiciel est **concédé sous licence, non vendu**. Le Licencié n'acquiert aucun droit
de propriété sur le Logiciel.

---

## 3. Restrictions

Sauf dans la mesure où la loi l'autorise impérativement, le Licencié s'engage à ne pas, et
à faire en sorte que ses Utilisateurs autorisés ne fassent pas :

a) copier le Logiciel autrement que pour l'installation sur les Postes autorisés et pour
une copie de sauvegarde raisonnable;

b) vendre, louer, prêter, sous-licencier, distribuer, publier ou autrement mettre le
Logiciel ou une Clé de licence à la disposition de tiers;

c) partager une Clé de licence avec toute personne autre que l'Utilisateur autorisé associé
au Siège visé;

d) décompiler, désassembler, effectuer de l'ingénierie inverse ou tenter autrement de
dériver le code source du Logiciel, sauf dans la mesure expressément permise par une loi
applicable malgré la présente interdiction;

e) contourner, désactiver ou déjouer le mécanisme d'activation, de validation ou de
limitation de licence du Logiciel, ou aider quiconque à le faire;

f) supprimer ou modifier les mentions de droit d'auteur, de marque ou autres mentions de
propriété figurant dans le Logiciel;

g) utiliser le Logiciel pour développer un produit concurrent ou pour permettre à un tiers
de le faire;

h) utiliser le Logiciel d'une manière contraire aux lois applicables ou aux règles de
l'ordre professionnel dont le Licencié ou l'Utilisateur autorisé est membre.

---

## 4. Abonnement, frais, activation et validation

4.1 **Abonnement à renouvellement automatique.** L'accès aux Fonctions sous licence est
offert par Abonnement, par Siège, selon la formule mensuelle ou annuelle choisie à la
Commande. L'Abonnement se **renouvelle automatiquement** à la fin de chaque Période
d'abonnement, pour une période de même durée, jusqu'à son annulation conformément à
l'article 4.3.

4.2 **Frais et taxes.** Les frais d'Abonnement par Siège sont ceux indiqués à la Commande
(tels qu'affichés sur la page d'achat au moment de la souscription et confirmés dans la
confirmation de Commande). Ils sont payables d'avance, au début de chaque Période
d'abonnement, **plus les taxes de vente applicables, le cas échéant**. Le Concédant peut
modifier les frais d'Abonnement moyennant un préavis d'au moins **trente (30) jours**
transmis au Licencié; le nouveau tarif s'applique à compter du renouvellement suivant
l'expiration du préavis, et le Licencié peut annuler son Abonnement avant cette date s'il
refuse le nouveau tarif.

4.3 **Annulation en tout temps.** Le Licencié peut annuler son Abonnement en tout temps :

a) **directement en ligne**, au moyen du portail client sécurisé de Stripe, accessible par
le lien fourni sur la page d'achat et dans les communications de facturation; ou

b) par avis écrit transmis au soutien technique (article 8.2), qui traite également les
demandes de réduction du nombre de Sièges.

L'annulation prend effet **à la fin de la Période d'abonnement en cours** du ou des Sièges
visés : les Fonctions sous licence demeurent accessibles jusqu'à cette date et aucun frais
n'est exigé pour les périodes subséquentes. Les frais déjà payés ne sont pas remboursables,
en tout ou en partie; en particulier, l'annulation d'un Abonnement annuel en cours d'année
ne donne droit à aucun remboursement pour les mois restants, l'accès aux Fonctions sous
licence demeurant toutefois maintenu jusqu'à la fin de l'année déjà payée. L'ajout d'un
Siège en cours d'Abonnement crée une nouvelle Période d'abonnement propre à ce Siège,
débutant à la date de son activation.

4.4 **Expiration et non-paiement.** En cas d'échec ou de défaut de paiement non corrigé
dans les **dix (10) jours** d'un avis, le Concédant peut suspendre ou désactiver les Clés de
licence visées. Les Fonctions sous licence cessent alors d'être accessibles; les Fonctions
gratuites demeurent utilisables et le Licencié **conserve l'accès à ses Données**
enregistrées localement.

4.5 **Validation en ligne.** L'activation et le maintien de la licence requièrent une
validation périodique auprès du serveur de licences du Concédant (service exploité par un
fournisseur tiers, actuellement Keygen.sh). Le Logiciel effectue cette validation
automatiquement lorsqu'une connexion Internet est disponible, sans intervention de
l'Utilisateur autorisé. Cette validation est **distincte de la facturation** : elle sert
uniquement à vérifier que la licence est valide et que le plafond de Postes est respecté.
Lors de ces communications, seuls sont transmis : la Clé de licence et un **identifiant de
machine haché** (empreinte technique du Poste). **Aucune Donnée du Licencié — notamment
aucune donnée de patient — n'est transmise au serveur de licences lors de ces
validations.**

4.6 **Fonctionnement hors ligne.** Chaque validation réussie accorde au Poste un droit
d'utilisation hors ligne de **trente (30) jours**. Les Fonctions sous licence demeurent donc
pleinement fonctionnelles sans connexion Internet pendant les trente (30) jours suivant la
dernière validation réussie; au-delà, une reconnexion au serveur de licences est nécessaire
pour les réactiver. En pratique, chaque Poste doit ainsi pouvoir joindre le serveur de
licences au moins une fois par mois. Le Licencié reconnaît que le fonctionnement des
Fonctions sous licence dépend de la disponibilité du serveur de licences; le Concédant
déploie des efforts raisonnables pour en assurer la disponibilité mais ne la garantit pas.

4.7 **Désactivation d'un Poste.** Le Licencié peut demander au Concédant de libérer un
Poste (p. ex. remplacement d'un ordinateur) afin d'activer la Clé de licence sur un nouveau
Poste, dans la limite prévue à l'article 2.2.

---

## 5. Propriété intellectuelle

5.1 Le Logiciel, sa structure, son code, son interface, sa documentation et tous les droits
de propriété intellectuelle qui s'y rattachent sont et demeurent la propriété exclusive du
Concédant [ou de ses concédants]. Tous les droits non expressément accordés sont réservés.

5.2 Les **Données du Licencié demeurent la propriété du Licencié** (ou des personnes
concernées, selon le cas). Le Concédant ne revendique aucun droit sur celles-ci et n'y a
pas accès : le Logiciel les stocke localement sur les Postes du Licencié.

5.3 Le Licencié peut transmettre au Concédant des commentaires ou suggestions; le Concédant
peut les utiliser librement, sans obligation ni compensation.

---

## 6. Usage professionnel — avis important

6.1 **Usage prévu.** ARA est un **outil de documentation et de rédaction de rapports**
destiné aux audiologistes et autres professionnels de l'audition. Le Logiciel saisit,
calcule, met en forme et propose du contenu à partir des informations fournies par
l'Utilisateur autorisé; il **ne pose aucun diagnostic** et **ne remplace pas le jugement
clinique** d'un professionnel qualifié. [Note interne : cet énoncé d'usage prévu doit être
identique, mot pour mot, à celui utilisé sur le site web, dans le marketing et dans toute
communication avec Santé Canada.]

6.2 **Responsabilité professionnelle.** Toute conclusion clinique, interprétation,
recommandation ou tout rapport produit au moyen du Logiciel doit être **révisé, ajusté,
approuvé et signé** par le professionnel qui en assume l'entière responsabilité. Le
Licencié est seul responsable de la vérification de l'exactitude des calculs, des textes
suggérés et des documents générés avant leur utilisation ou leur transmission à quiconque.

6.3 Le Licencié déclare que chaque Utilisateur autorisé est un professionnel habilité (ou
agit sous la supervision d'un tel professionnel) et s'engage à ce que le Logiciel soit
utilisé conformément aux normes de l'ordre professionnel applicable et aux lois
applicables.

---

## 7. Données des patients et protection des renseignements personnels

7.1 **Stockage local.** Le Logiciel enregistre les Données du Licencié localement sur les
Postes du Licencié. Le Concédant n'héberge pas, ne recueille pas et ne consulte pas ces
Données. La seule fonction du Logiciel susceptible de faciliter la transmission de Données
à l'extérieur d'un Poste est la fonction d'aide à l'envoi par courriel décrite à
l'article 7.4, laquelle n'est déclenchée que sur l'initiative de l'Utilisateur autorisé.

7.2 **Responsabilités du Licencié.** Le Licencié est seul responsable :

a) de la conformité de sa collecte, de son utilisation et de sa conservation des
renseignements personnels de ses patients aux lois applicables, notamment la *Loi sur la
protection des renseignements personnels dans le secteur privé* (Québec) et, le cas
échéant, les règles applicables aux dossiers professionnels;

b) de la sécurité des Postes sur lesquels le Logiciel est installé (contrôle d'accès,
chiffrement du disque, antivirus, etc.);

c) de la **sauvegarde régulière** de ses Données. Le Concédant n'est pas responsable de la
perte de Données, quelle qu'en soit la cause.

7.3 **Renseignements du Licencié.** Aux fins de la gestion des licences et de la
facturation, le Concédant recueille et conserve les renseignements suivants : nom et
coordonnées du Licencié, noms et adresses courriel des Utilisateurs autorisés, Clés de
licence, identifiants de machine hachés et historique d'activation. Les renseignements de
paiement sont recueillis et traités par le fournisseur de traitement de paiement du
Concédant, Stripe; le Concédant ne conserve pas les numéros de carte.
Ces renseignements sont utilisés uniquement pour la délivrance, la validation, le soutien
et la facturation des licences, et sont traités conformément à [la politique de
confidentialité du Concédant — à rédiger / lien]. Le serveur de licences et le fournisseur
de paiement peuvent héberger ces renseignements à l'extérieur du Québec. [Point pour
l'avocat : exigences de la Loi 25 — évaluation des facteurs relatifs à la vie privée pour
communication hors Québec, mentions obligatoires dans la politique de confidentialité,
désignation d'un responsable de la protection des renseignements personnels.]

7.4 **Fonction d'aide à l'envoi par courriel.** Le Logiciel offre une fonction d'aide à la
transmission d'un rapport par courriel : sur commande de l'Utilisateur autorisé, il ouvre
l'application de courriel du Licencié avec un message pré-rempli (destinataire, objet et
texte d'accompagnement) et affiche, dans l'explorateur de fichiers, le dossier local
contenant le rapport. **Le Logiciel ne joint aucun document au message et ne transmet
rien lui-même** : c'est l'Utilisateur autorisé qui joint le rapport au message, le vérifie
et l'envoie au moyen de ses propres systèmes de courriel, sans que le message ni le
rapport ne transitent par le Concédant ou par un service mandaté par lui. Le Concédant n'a
accès ni au contenu ni aux destinataires de ces messages.

Avant l'envoi, il incombe à l'Utilisateur autorisé de vérifier le destinataire, le contenu
du message et la présence de la bonne pièce jointe. Le Licencié est seul responsable de
s'assurer que la transmission de renseignements relatifs à un patient par courriel est
appropriée dans les circonstances et conforme à ses obligations légales, déontologiques et
professionnelles, notamment quant au consentement du patient, à l'exactitude de l'adresse
du destinataire et au caractère sécuritaire du moyen de transmission choisi.

---

## 8. Mises à jour et soutien technique

8.1 Le Concédant peut, à sa discrétion, fournir des mises à jour ou des corrections du
Logiciel. **Toutes les mises à jour et mises à niveau** publiées par le Concédant sont
incluses pendant la durée de l'Abonnement, sans frais additionnels.

8.2 Le Concédant offre un soutien technique raisonnable par courriel à [adresse de
soutien], sans engagement de délai de réponse ni de niveau de service, sauf entente écrite
distincte.

8.3 Le Concédant peut cesser de prendre en charge des versions antérieures du Logiciel ou
des environnements d'exploitation obsolètes moyennant un préavis raisonnable.

---

## 9. Garanties et exclusions

9.1 Le Concédant garantit qu'il détient les droits nécessaires pour concéder la présente
licence.

9.2 **Dans toute la mesure permise par la loi**, le Logiciel est fourni « **tel quel** » et
« selon la disponibilité », sans autre garantie ou condition, expresse ou implicite,
notamment quant à sa qualité marchande, son adéquation à un usage particulier, son
exactitude, son fonctionnement ininterrompu ou exempt d'erreurs. Le Concédant ne garantit
pas que le Logiciel répondra aux besoins du Licencié ni qu'il sera compatible avec tout
matériel ou logiciel tiers.

9.3 Certaines lois ne permettent pas l'exclusion de garanties légales; le cas échéant, les
exclusions qui précèdent s'appliquent dans la pleine mesure permise. [Point pour l'avocat :
articulation avec la garantie légale du C.c.Q. et, si des personnes physiques consommatrices
pouvaient être visées, avec la Loi sur la protection du consommateur.]

---

## 10. Limitation de responsabilité

10.1 **Dans toute la mesure permise par la loi**, la responsabilité totale et cumulative du
Concédant en vertu du présent Contrat, quelle qu'en soit la cause (contractuelle ou
extracontractuelle), est limitée au **montant des frais d'Abonnement payés par le Licencié
au cours des douze (12) mois précédant le fait générateur**.

10.2 En aucun cas le Concédant ne sera responsable des dommages indirects, accessoires,
consécutifs, exemplaires ou punitifs, ni des pertes de profits, de revenus, de clientèle,
de données ou d'économies escomptées, même s'il a été avisé de la possibilité de tels
dommages.

10.3 **Exceptions.** Rien dans le présent Contrat n'exclut ni ne limite la responsabilité
du Concédant : a) pour le **préjudice corporel ou moral**; b) en cas de **faute
intentionnelle ou de faute lourde**; c) pour toute autre responsabilité qui ne peut être
exclue ou limitée en vertu de la loi, notamment l'article 1474 du Code civil du Québec.

10.4 Le Licencié reconnaît que les frais d'Abonnement reflètent la répartition des risques
convenue au présent article et qu'ils seraient plus élevés sans ces limitations.

---

## 11. Durée, résiliation et effets

11.1 Le présent Contrat prend effet à la première acceptation, installation ou utilisation
du Logiciel et demeure en vigueur tant que le Licencié utilise le Logiciel ou détient un
Abonnement actif.

11.2 Le Concédant peut résilier le Contrat ou suspendre la licence en cas de manquement du
Licencié qui n'est pas corrigé dans les trente (30) jours d'un avis écrit, ou immédiatement en
cas de manquement grave (notamment aux articles 3 ou 5) ou de non-paiement (sous réserve de
l'article 4.4).

11.3 Le Licencié peut mettre fin à son Abonnement conformément à l'article 4.3 et peut
résilier le présent Contrat en cessant d'utiliser le Logiciel et en le désinstallant.

11.4 À la résiliation ou à la fin de l'Abonnement : les Clés de licence sont désactivées et
le Licencié cesse d'utiliser les Fonctions sous licence. Le Licencié conserve ses Données
locales et l'accès aux Fonctions gratuites. Les articles 3, 5, 6, 7, 9, 10, 11.4 et 12
survivent à la résiliation.

---

## 12. Dispositions générales

12.1 **Droit applicable et forum.** Le présent Contrat est régi par les lois en vigueur
dans la province de Québec et les lois du Canada qui s'y appliquent. Tout litige relève de
la compétence exclusive des tribunaux du district judiciaire de [district du siège du
Concédant].

12.2 **Modifications du Contrat.** Le Concédant peut modifier le présent Contrat moyennant
un préavis d'au moins **trente (30) jours** transmis au Licencié (p. ex. par courriel ou
dans le Logiciel). Les modifications prennent effet au renouvellement suivant
l'expiration du préavis; le Licencié qui les refuse peut annuler son Abonnement avant cette
date, conformément à l'article 4.3. La poursuite de l'utilisation après l'entrée en vigueur
des modifications vaut acceptation.

12.3 **Cession.** Le Licencié ne peut céder le présent Contrat ni la licence sans le
consentement écrit préalable du Concédant. Le Concédant peut céder le Contrat dans le cadre
d'une vente ou réorganisation de son entreprise.

12.4 **Intégralité.** Le présent Contrat, avec la Commande, constitue l'entente complète
entre les parties au sujet du Logiciel et remplace toute entente ou déclaration antérieure.
En cas de conflit, la Commande prévaut sur le présent Contrat pour ce qui est du nombre de
Sièges et des frais.

12.5 **Divisibilité.** Si une disposition est jugée invalide ou inapplicable, elle est
réputée modifiée dans la mesure minimale nécessaire, et les autres dispositions demeurent
en vigueur.

12.6 **Renonciation.** Le défaut d'exercer un droit ne vaut pas renonciation à ce droit.

12.7 **Force majeure.** Aucune partie n'est responsable d'un retard ou d'une inexécution
attribuable à une force majeure au sens du Code civil du Québec, à l'exception des
obligations de paiement.

12.8 **Langue.** Le présent Contrat est rédigé en français et la version française est
remise au Licencié en premier. Une version anglaise est offerte à titre de commodité; les
parties peuvent expressément convenir d'être liées par celle-ci après avoir pris
connaissance de la version française. En cas de divergence entre les versions, **la
version française prévaut**. [Point pour l'avocat : valider la mécanique de remise et
d'acceptation des deux versions au regard des exigences de la Charte de la langue
française pour les contrats d'adhésion, et faire réviser la traduction anglaise.]

12.9 **Avis.** Tout avis au Concédant est transmis à [adresse courriel officielle]; tout
avis au Licencié peut être transmis à l'adresse courriel associée à son compte ou à sa
Commande.

---

*© [année] [dénomination sociale]. Tous droits réservés. ARA [MC/MD — selon l'état des
marques de commerce; nom sous réserve de la vérification de disponibilité].*
