---
title: Metadata and the Web
layout: page
author:
 - first_name: Tony
   last_name: Gill
secondary_author: Revised by Murtha Baca, with assistance from Joan Cobb, Nathaniel Deines, and Moon Kim
sort_order: 3
---

When the first edition of this book was published in 1998, the term *metadata* was comparatively esoteric, having originated in the information science and geospatial data communities at the end of the twentieth century. As of this writing, a Google search on “metadata” yields hundreds of millions of results; a search in WorldCat for publications with “metadata” in the title yields more than 13,000 results; and a keyword search on “metadata” in Amazon returns more than 5,000 results. Metadata has hit the big time; it is now a pervasive phenomenon, and even a consumer commodity. For example, almost all consumer-level digital cameras capture and embed exchangeable image file format (Exif)[^1] metadata in digital images, and files created using Adobe’s Creative Suite of software tools (e.g., Photoshop and Illustrator) contain embedded Extensible ­Metadata Platform (XMP)[^2] metadata.

As the term *metadata* has been increasingly adopted and co-opted by more diverse communities, its definition has grown in scope to include almost anything that describes anything else. The standard concise definition is “data about data,” a relationship that is frequently illustrated by the metaphor of a library card catalog, in which the individual entries describe the holdings. This metaphor is pedagogically useful because it is nonthreatening. Many people are familiar with the concept of a library catalog as a simple tool used to help readers find the books and other items they are seeking and to help librarians manage collections. However, the example may be seen as problematic from an ontological perspective, because neither catalog entries nor books are, in fact, data per se; they are *containers* or *carriers* of data. This distinction between information and its carrier is increasingly being recognized; for example, the International Council of Museums’ International Committee for Documentation (CIDOC) Conceptual Reference Model (CRM), a domain ontology for the semantic expression and interchange of museum, library, and archival information, models the relationship between information objects—identifiable conceptual entities such as texts, images, algorithms, or musical compositions—and their physical carriers.[^3]

The International Federation of Library Associations and Institutions Functional Requirements for Bibliographic Records (FRBR) model makes a somewhat similar distinction between *works*, *expressions*, *manifestations*, and *items*: the first two entities are conceptual, while the last two are actual physical instances that are described by bibliographic records. (Note that as the new linked open data standard for bibliographic records, BIBFRAME, becomes more widely used and eventually replaces the MARC format, the FRBR conceptual data model may be superseded. In any case, it is clear that while FRBR can be useful for modeling literary and musical works, it does not provide an adequate model for unique works such as works of art or architecture or for “serial” works such as periodicals.) [^4]

Of course, most library catalogs are now encoded as 0s and 1s in databases, and the “items” representing the “works” they describe (to continue with the FRBR nomenclature) are increasingly likely to be digital objects that reside on a server, as opposed to objects composed of ink, paper, cardboard, etc., that are located on shelves. This is even truer now in light of large-scale digitization initiatives that have been undertaken by many knowledge organizations, not to mention gigantic projects such as Google Books and the Internet Archive.

One property of metadata is that it is—or should be—­structured to model the most important attributes of the type of object that it describes. For example, each component of a standard MARC record is clearly delineated by field labels that identify the meaning or type of each atomic piece of information that describes the bibliographic item—author, title, subject, and so on.

The structured nature of metadata is important. By accurately modeling the essential attributes of the class of objects being described, metadata in aggregate can serve as a catalog—a distillation of the attributes of the particular collection—thereby becoming a useful tool for using and managing that collection, be it a collection of books, other physical objects, or digital images or digital surrogates of books, musical scores, visual materials, and so on. In the context of this chapter, then, *metadata* can be defined as *a structured description of the essential attributes of an object*.


> ## Web Search Engines
>
> Web search engines such as Google are automated information retrieval systems that continuously traverse the web, visiting sites and saving texts (not including stop words), images, and locations (usually in the form of URLs) in order to build up a huge index or “list” of web pages. Search engines typically provide keyword searching and retrieve huge sets of results that are “relevance ranked” using a variety of proprietary algorithms. Search engines rely heavily on &lt;title&gt; HTML tags (a simple but very important type of metadata that appears in the title bar and favorites/bookmarks menus of most web browsers), the actual text on the pages, and referring links (which are taken as an indication of the popularity of the resource).
{:.sidebar}

## The Web Continues to Grow

The World Wide Web is the largest collection of documents the world has ever seen, and its growth is showing no signs of slowing. Although it is impossible to determine the exact “size” of the web (both the visible web and deep web), some metrics are available. According to a Netcraft survey, in February 2004 there were approximately 47 million host names and 22 million active sites; ten years later (February 2014) there were 920 million host names and almost 180 million active sites.[^5] Although the Netcraft survey clearly demonstrates the continuing upward trend in the growth of the web, it does not tell the whole story because it does not address how many sites are hosted on each server and how many accessible pages are contained in each site.

## The Visible Web versus the Hidden Web

The problem of determining how many “pages” are really available on the web is complicated by the fact that a large and increasing amount of the content on the web is served dynamically from databases in response to user queries, is expressed in a non-web format, or requires some kind of user authentication or login. Web crawlers, also called spiders or robots (the software used by search engines to trawl the web for content and build their vast indices), can only search the so-called “visible web”; they cannot submit queries to databases, parse file formats that they do not recognize, click buttons on web forms, or log in to sites requiring authentication. As a result, all of this dynamically generated content (as opposed to “document-like” static HTML pages) is effectively invisible to the search engines and therefore is not indexed.

Collectively, this content beyond the reach of search engine crawlers is referred to as the “deep web,” the “invisible web,” or the “hidden web,” and as these names suggest, estimating its size is even more difficult (and perhaps even more meaningless, since the number grows enormously every day) than measuring the visible web. Although much of the content on the deep web is deliberately kept out of the public sphere—either because it requires a password or institution-specific IP address or because some kind of fee or subscription must be paid to access it—there is a vast amount of information that is not accessible to search engines simply because it is located on sites that were not designed to be accessible to crawlers or robots. This is an especially common problem for sites that generate pages dynamically from databases in response to users’ queries (as with library catalogs and many other databases). Because commercial search engines like Google typically account for the vast majority of traffic on the web, building sites that are not accessible to crawlers can seriously limit the accessibility and use of the information they contain. Institutions seeking to make dynamically generated data as widely accessible as possible should design “crawler-friendly” sites; a good way to do this, which also facilitates access by human users (as opposed to web robots), is to provide access to information through hyperlinked hierarchies of categories in addition to search interfaces. Another option for the library, archive, and museum sectors is to contribute deep web collections information to union catalogs or other aggregated resources that are indexed by the commercial search engines. (This is a good strategy in any case, as the more “places” on the web from which information can be accessed, the more users can be reached.)

Search engine providers also provide tools to help webmasters expose otherwise hidden content; for example, Google’s Sitemap feature allows webmasters to provide a detailed list of all the pages on their sites—even those that are dynamically generated—in a variety of machine-readable formats to ensure that every page gets crawled and indexed. Union catalogs and tools to expose deep web content to search engines are discussed in this chapter.

## Finding Needles in a Huge and Rapidly Expanding Haystack

The web is the largest and fastest-growing collection of documents the world has ever seen, and it has undoubtedly revolutionized access to a formerly unimaginable amount of information, of widely variable quality, for the billions of users who have access to it. It is worth remembering, however, that this is still less than one person in five or six globally. The myth of “universal access” to the web remains just that—a myth.

Unfortunately, finding relevant, authoritative, high-quality information on the web is not always a straightforward proposition. There is no overarching logical structure to the web, and the core protocols do not offer any support for search and retrieval beyond the basic mechanisms provided by the HTTP for requesting and retrieving pages from a specific web address. Disappointment with the web was clearly evident in a comment by Ted Nelson (who first coined the term *hypertext* in 1965) in a speech delivered at the HyperText97 conference: “The reaction of the hypertext research community to the World Wide Web is like finding out that you have a fully grown child. And it’s a delinquent.”[^6]

Not surprisingly, tools designed to address the resource location problem and help make sense of the web’s vast corpus of information resources started to appear soon after the launch of the first web browsers in the early 1990s. For example, Tim Berners-Lee founded the WWW Virtual Library,[^7] a directory of sites maintained by human editors, shortly after introducing the web itself, and search engines such as Yahoo!, Lycos, and Webcrawler were launched in 1994.

As of this writing, the clear market leader in web search for almost two decades has been Google. According to its corporate site, “Google’s mission is to organize the world’s information and make it universally accessible and useful.”[^8] In the time since Google was registered as a web domain in 1997, it has grown to become a corporate and web giant, employing thousands of people. Clearly, helping people find information on the web is big business.

To maintain its position as the most popular search engine on the web, Google must routinely perform several Herculean tasks that are becoming increasingly difficult as both the web itself and the number of people using it continue to grow. First, it must maintain an index of publically available web pages that is both sufficiently current and sufficiently comprehensive to remain competitive. Currency is important, because as Google’s Trends and Year in Search pages show,[^9] many of the most popular searches are related to current events and popular culture. Any search engine that fails to deliver relevant results to queries about current events will rapidly lose a large share of the global search market.

Second, a search engine must have an adequately comprehensive index of the web, because without such an index it will fail to deliver relevant results that a competitor with a more comprehensive index could provide. Index size is one of the key metrics on which search engines compete and measure success, and, as we know, the size of the web is continuously growing, with more sites and pages and words to index appearing daily.

Third, in addition to maintaining a current and comprehensive index of the rapidly expanding web, a search engine must be able to search that index, ranking the search results and presenting them to the user as quickly as possible—ideally, in less than half a second. In fact, when users do a search on Google, they are not searching the web “live”—they are searching a vast corpus of tags and text that the search engine has stored in the form of an index; this is why a search via a commercial search engine sometimes results in a “page not found” message—that is, the page that was indexed by the web crawler is no longer available, but the data taken from it still exists in an index on one of the search provider’s servers.

Much of Google’s rise to dominance in the search engine market can be attributed to its sophisticated PageRank™ algorithm, which assesses the importance of retrieved web pages according to the number of links from other pages that point to them.[^10] The text contained in the &lt;title&gt; HTML tag and the PageRank value of each page are the only metadata that Google seems to use to any meaningful and consistent extent in providing its search service—as described above, the search itself is performed on an index of the actual data content of the HTML pages themselves. In other words, what Google enables its users to search is an index or huge “list” of every word that appears on every HTML page on the visible web; and because the search is performed on the index and not in real time, results are retrieved very quickly, which is what users have come to expect.[^11]

Fourth, a market-leading search engine such as Google must be able to respond to hundreds of millions of search requests from users all around the world every day. To meet these gargantuan and constantly increasing information retrieval challenges, Google has developed one of the largest and most powerful computer infrastructures on the planet. Unlike most of its competitors, which typically use relatively small clusters of very powerful servers, Google has developed a massive parallel architecture comprising large numbers of inexpensive networked personal computers, which Google claims is both more powerful and more scalable than using a smaller number of more powerful servers.[^12]

Google provides little information about its hardware infrastructure, but given the explosive growth of both the amount of information on the web and the number of users, coupled with the wide range of other services offered by the Internet giant (Google Scholar, Google Books, Google Images, Gmail, and Google Earth, to name some of the best-known), the number of server nodes is undoubtedly huge. There is widespread speculation that the Google server cluster could comprise anywhere from hundreds of thousands to millions of nodes and that it could in fact be the most powerful “virtual supercomputer” in the world.

## Can the Search Engines Keep Up?

Can commercial search engines continue to scale up their operations as both the amount of content on the web and the number of users continue to grow? Since before the new millennium, analysts have been predicting that the web would outgrow the search providers’ abilities to index it, but as of this writing, the tipping point has not been reached.

Steve Lawrence and C. Lee Giles of the NEC Research Center conducted a scientifically rigorous survey of the leading search engines’ coverage of web content in February 1999. Their findings, published in the peer-reviewed journal *Nature*, indicated that at that time no search engine indexed more than about 16 percent of the web: “Our results show that the search engines are increasingly falling behind in their efforts to index the Web,” they wrote.[^13] However, if we compare this with the January 2005 study by Gulli and Signorini, which estimated that Google had indexed about 76 percent of the 11.5 billion pages on the web at that time, it seems that the search engines learned to provide better coverage than they did in the web’s infancy. Clearly, search engines in general and Google in particular have been able to scale up their technology better than had been predicted at the end of the twentieth century.

But common sense suggests that there may be a limit to the search engines’ current ways of dealing with the continuous and rapid growth of the web. Even if Google’s massively networked computer architecture is technically capable of indefinite expansion, other kinds of constraints may prove insurmountable at some point in the future. As long ago as 2005, an article by one of Google’s principal hardware engineers warned that unless the ratio of computer performance to electrical power consumption improves dramatically, power costs for commercial search engines and other service providers could become a larger component of the total cost of ownership than the initial hardware costs.[^14] This could become a significant barrier to continued expansion of the Google technical platform in the future, particularly if energy costs continue to rise. A million interconnected servers consume a tremendous amount of electrical power and require a tremendous amount of energy for “collateral” expenses such as climate control.

## Metadata to the Rescue?

In the early days of the web, many people, particularly those in the emerging digital library community, saw metadata as the long-term solution to the problem of resource discovery on the web. The reasoning behind this was very logical and goes back to the classic example of metadata: library catalogs had proved their efficacy in providing both access to and control of large bibliographic collections, so why should the web be different?

Research and development projects to catalog useful web resources sprang up around the globe. One of the first lessons learned from these early pilot projects was that the economics of cataloging web resources was very different from the economics of cataloging books. Whereas the creation of a carefully crafted (and often very expensive) MARC record—complete with subject headings and other controlled terminology and conforming to standard cataloging rules—could be justified in the traditional bibliographic world because the record would be used by many different libraries for many years, web resources are both more dynamic and more transient than traditional published materials; unlike books, websites often change, and sometimes they disappear altogether.

As a result, metadata standards for describing Internet resources began to appear, ranging from relatively simple embedded metadata in the form of meta tags to Dublin Core, a metadata element set purportedly developed specifically for web resources, to the Resource Description Framework (RDF), a complex model for data interchange. It should be noted, however, that many search engines, including Google, make little or inconsistent use of embedded metadata for a variety of reasons (primarily, it seems, because of lack of trustworthiness of that “hidden” metadata).

## Meta Tags

The early, now-defunct search engine AltaVista was the first to popularize the use of two simple metadata elements, “description” and “keywords,” that can be easily and invisibly embedded in the &lt;head&gt; section of web pages using the HTML meta tag. Here are two examples:

> &lt;metaname=“description” content=“Version 4.0 of the site devoted to metadata: what it is, its types and uses, and how it can improve access to web resources.”&gt;
>
> &lt;metaname=“keywords” content=“data standards, metadata, meta data, World Wide Web, WWW, digital resources, metatags, Dublin Core, RDF, Semantic Web, crosswalks, metadata mapping.”&gt;

The description tag is intended to display in search engine results lists to provide an accurate, concise, authoritative summary of the particular web resource so that users can decide whether or not to click and go to the resource itself. If the description tag is longer than about 120 characters, it usually gets cut off in search results displays. Google and other search engines do use the description tag, but not consistently; when it is absent, however, text from the web page itself is displayed, seemingly chosen at random but generally coming from the top of the page. This often produces confusing and even senseless results displays.

The keyword tag is a sort of “container” for subjects, names, and other access points, intended to provide more effective retrieval and relevance ranking. The keywords tag enables the creators of a web resource to include terms that do not appear on the web page itself—in short, it enables the creators of web pages to “catalog” their resources. This tag seems to be used by commercial search engines less than the description tag; most often, it is ignored. But it can be useful for enhancing searching within an institution’s or company’s own website, where the search engine is controlled internally.

## Dublin Core

The Dublin Core Metadata Element Set[^15] is a set of fifteen elements that can be used to describe a wide variety of resources for the purpose of cross-disciplinary and cross-system resource discovery. Although originally intended solely as the equivalent of a simple “electronic catalog card” for networked resources, Dublin Core is now used to describe almost any kind of information object or asset. The fifteen Dublin Core elements are *contributor*, *coverage*, *creator*, *date*, *description*, *format*, *identifier*, *language*, *publisher*, *relation*, *rights*, *source*, *subject*, *title*, and *type*.

The Dublin Core elements and their meanings were developed and refined by an international group of librarians, information professionals, and subject specialists through an ongoing consensus-building process that has included numerous conferences and workshops, working groups, and electronic mailing lists. The element set has been published as both a national and international standard (NISO Z39.85-2001[^16] and ISO 15836:2009,[^17] respectively). There are a significant number of large-scale deployments of Dublin Core metadata around the globe,[^18] and it has become the preferred schema for metadata mapping and harvesting.

## Resource Description Framework

The Resource Description Framework (RDF)[^19] is a standard developed by the World Wide Web Consortium (W3C) for encoding resource descriptions in machine-readable form, so that computers can “understand,” share, and process the information in meaningful and useful ways. RDF metadata is normally encoded using standard syntaxes such as XML and Turtle.[^20] As the name indicates, RDF provides a *framework* for resource description; that is, it provides the formal syntax or structure of the resource description, but it does not furnish the actual data values to be expressed. The semantics or meaning must be specified for a particular domain or community in order for computers to be able to make sense of the encoded metadata. The semantics are specified by an RDF vocabulary,[^21] which is a knowledge representation or model of the metadata that unambiguously identifies what each individual metadata element means and how it relates to the other elements in the domain. RDF vocabularies can be expressed as RDF schemas[^22] or, when they convey more complex relationships among data elements, as Web Ontology Language (OWL) ontologies.[^23]

The CIDOC Conceptual Reference Model (CRM) is an example of an ontology that provides the semantics for a specific domain—the interchange of library, archive, and museum collection documentation. By expressing the classes and properties of the CIDOC CRM as an RDF schema or one or more OWL ontologies, information about cultural heritage collections can be expressed in a semantically unambiguous way, thereby facilitating information sharing and interchange across different computer systems. In the age of linked data (see below), the CIDOC CRM has great potential because it explicitly models the relationships among entities, agents, and events.

Using the highly extensible and robust framework of RDF, RDF schemas, and OWL ontologies, rich metadata descriptions of digital resources can be created that draw on a theoretically unlimited set of semantic vocabularies. Interoperability for automated processing is maintained because the strict underlying syntax requires that each vocabulary be explicitly specified.

RDF, RDF schemas, and OWL ontologies are all fundamental building blocks of the W3C’s so-called “Semantic Web” activity.[^24] The Semantic Web is the vision of Tim Berners-Lee, director of the W3C and the “inventor” of the original World Wide Web.[^25] Berners-Lee’s vision is for the web to evolve into a seamless network of interoperable, meaningfully linked data that can be shared and reused across software, enterprise, and community boundaries.

## Linked Data

Linked data is data that encodes semantic relationships by following a set of best practices for publishing and interlinking structured data that uses RDF syntaxes and HTTP URIs.[^26] Linked data can be published on the open World Wide Web or behind a firewall. If linked data is made available for use, reuse, and redistribution on the visible web, it is called linked open data (LOD). Examples of large LOD datasets are DBPedia,[^27] the Library of Congress Subject Headings, and the Virtual International Authority File (VIAF); the Getty’s electronic thesauri are also available as LOD.[^28]

As of this writing, LOD offers great promise for semantically rich, easier, and more widespread use, reuse, and sharing of both metadata records and the controlled vocabularies that are used to populate those records and provide meaningful connections among resources. LOD has the potential to revolutionize the way data can be disseminated and integrated in ways that will significantly enhance the process of information- and resource-seeking and utilization.

## Metadata Harvesting

Harvesting is the process of gathering metadata or data from the Internet in order use it in a variety of ways. Often metadata is harvested in order to create a central index of searchable records from a variety of repositories.

The Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH)[^29] provides a method for making deep web metadata more accessible. Rather than embedding metadata in the actual content of HTML pages, the OAI-PMH uses a set of protocols that allows metadata records to be exposed in a predictable way so that other OAI-PMH–compatible computer systems can access and retrieve them.

The OAI-PMH supports interoperability (which can be thought of as the ability of systems to communicate meaningfully) between two different computer systems: an OAI data provider and an OAI harvester, which in most cases is also an OAI service provider. As the names suggest, an OAI data provider is a source of metadata records, whereas the OAI harvester retrieves or “harvests” records from one or more data providers. Since both the data provider and harvester must conform to the same basic information-exchange protocols, metadata records, if properly formatted, can be reliably retrieved from the provider(s) by the harvester.

Although the OAI-PMH can in theory support records expressed in any XML metadata schema, the protocol mandates that all OAI data providers must be able to deliver Dublin Core XML metadata records as a minimum requirement. In this way, the OAI-PMH supports interoperability of metadata originating in different systems. It should be noted that, while the OAI-PMH is the prevalent protocol for metadata harvesting and aggregation as of this writing, when the time comes that LOD is prevalent, the OAI protocol may become obsolete.

## Meta-utopia or Meta-garbage?

In an oft-quoted diatribe from 2001 (ancient history for the Internet, but the content is still valid today—although the HTML page where the text appears is formatted in a very old-fashioned way), the Canadian journalist and blogger Cory Doctorow enumerated what he calls the “seven insurmountable obstacles between the world as we know it and meta-utopia.”[^30] In this piece, Doctorow, a great proponent of making digital content as widely available as possible, puts forth his arguments for the thesis that metadata created by humans will never have widespread utility as an aid to resource discovery on the web. These arguments are paraphrased here:

- *“People lie.”* Metadata cannot be trusted because there are many unscrupulous content creators who publish misleading or dishonest metadata in order to draw traffic to their sites.
- *“People are lazy.”* Most content publishers are not sufficiently motivated to do the labor involved in carefully cataloging the content they publish.
- *“People are stupid.”* Most content publishers are not intelligent enough to effectively catalog the content they produce.
- *“Mission impossible—know thyself.”* Metadata on the web cannot be trusted because there are many content creators who inadvertently publish misleading metadata.
- *“Schemas aren’t neutral.”* Classification schemes are subjective.[^31]
- *“Metrics influence results.”* Competing metadata standards bodies will never agree.
- *“There’s more than one way to describe something.”* Resource description is subjective.

Although obviously intended as a satirical piece, Doctorow’s short essay nevertheless contains several grains of truth when considering the web as a whole. His most compelling argument is the first one: people lie. It is very easy for unscrupulous web publishers to embed “meta tag spam”—deliberately misleading or dishonest descriptive metadata—in their web pages. This tactic is intended to increase the likelihood that a web page will appear in search engine results and to improve the site’s visibility and ranking on search engines. Increased visibility and higher ranking can dramatically increase the amount of user traffic to a site, resulting in potentially greater profits in the case of commercial sites and greater success for nonprofit organizations seeking to reach a broader audience. However, the search engine companies have long been wise to this practice, and as a result they often treat embedded metadata with skepticism—or ignore it altogether. It is rumored that some search engines may even penalize sites that contain suspect metadata by artificially lowering their page ranking. Because many search engines do not utilize embedded metadata, using instead the text in the Title HTML tag and the text on the actual page itself (Google appears to use both embedded and explicit metadata, but not in a consistent way), there may seem to be little incentive for honest web publishers to expend the time and effort required to add this potentially useful information to their own pages—unless the particular search engine that they use to index their own site makes use of the embedded keyword and description meta tags.

The other points on Doctorow’s list are less convincing, particularly if we look at the subset of web content created by libraries, museums, and archives. Librarians, museum documentation specialists, and archivists are typically diligent, trained information professionals, and they are not usually dishonest, lazy, or stupid. They have a long tradition of using standard metadata element sets such as MARC, the Metadata Object Description Schema (MODS), Encoded Archival Description (EAD), VRA Core, LIDO (Lightweight Information Describing Objects), and Dublin Core; classification schemes and controlled vocabularies such as Library of Congress authority files, its *Thesaurus for Graphic Materials,* and the Getty vocabularies; and community-specific cataloging rules such as Resource Description and Access (RDA), *Describing Archives: A Content Standard* (DACS), and *Cataloging Cultural Objects: A Guide to Describing Cultural Works and Their Images* (CCO). They use these tools to describe resources in standardized ways that have been developed over decades of collaborative consensus-building efforts. In effect, they have been demonstrating the value and power of descriptive metadata created by skilled human beings for many decades.

## Playing Tag

A relatively recent development in the field of metadata on the web that significantly weakens Doctorow’s argument is exemplified by the so-called folksonomies. A folksonomy is a sort of “uncontrolled vocabulary” that is built when many people use a shared system to label online content such as web pages or images with descriptive terms and names, known as tags. Many people are motivated to tag web content because it allows them to organize and find certain content; they are effectively building their own personal “catalogs” of online content. In folksonomies, any terms or names can be used; unlike true taxonomic classification systems and controlled vocabularies, in which synonyms are explicitly linked to one another, concepts are often organized in such a way as to encode their hierarchical relationships, and carefully constructed rules exist for the application of terms or names to describe an item.

The folksonomy aspect of “uncontrolled” tags comes into play when all the tags applied to a specific resource by multiple users are aggregated and ranked. For example, if one person tags an image with the term “impressionist” it doesn’t carry a great deal of weight in terms of searching. But if hundreds of users use this term, and it is the most frequently applied tag for a particular image or other online resource, it is a pretty safe bet that the resource is about or related to Impressionist art.

Two well-known examples of folksonomy/social tagging sites are LibraryThing[^32] and Flickr.[^33] LibraryThing enables users to assign tags to records from library catalogs and commercial sites; it also enables users to search the Library of Congress, Amazon, and hundreds of library catalogs enhanced by the tags added by users from around the world. Libraries, archives, and museums can use LibraryThing for Libraries[^34] to leverage third-party metadata, including tags, reviews, ratings, and so on, to enhance access to and discovery of their collections. In effect, the “uncontrolled” tags and other data that are added to the controlled terms in a standard library record by LibraryThing users “complement” the library record by providing many more potential access points.

Flickr is a digital image-sharing site that enables users to tag images for easier retrieval. The fact that the Library of Congress uses Flickr to allow users to tag and comment on images from selected photographic collections[^35] is another example of how libraries are adding access points and providing broader dissemination of their visual materials by taking advantage of user-generated metadata. In essence, the user-created keywords, in a variety of languages, are appended to a user-friendly version of the underlying Library of Congress MARC or Dublin Core metadata records.

## In Metadata We Trust (Sometimes)

Metadata is not a universal solution for resource discovery in the digital environment. The underlying issues of trust, authenticity, and authoritativeness continue to impede the widespread use of structured, standards-based metadata for web pages, and this situation is unlikely to change as long as the search engines can continue to satisfy (or seem to satisfy) the search needs of most users with their current methods—indexing the &lt;title&gt; HTML tag, the actual words on web pages, and ranking the “popularity” of pages based on the number of referring links.

But human-created metadata has a well-established and extremely important role in specific communities and applications, especially in the library, archive, and museum communities, where “metadata” is equivalent to “cataloging.” Many standards and technology components aimed at facilitating resource discovery and information sharing and dissemination have been in place for some time. These key building blocks include:

- data structure and data format standards for different types of resource descriptions, such as MARC[^36] (to be replaced by BIBFRAME), Dublin Core,[^37] MODS,[^38] EAD,[^39] VRA Core,[^40] and LIDO;[^41]
- data value standards such as Library of Congress authority files, Getty vocabularies, Medical Subject Headings (MESH), ICONCLASS, and many others;
- tools and methods for encoding metadata in machine-readable form: for example, XML, RDF, SKOS (Simple Knowledge Organization System), CIDOC CRM, and FOAF (Friend of a Friend);
- protocols for distributed search and metadata harvesting: for example, the Z39.50 family of retrieval protocols, web service protocols such as SOAP (Simple Object Access Protocol) and REST (Representational State Transfer), and the OAI-PMH.

By using these various components in intelligent and appropriate ways in order to provide access to the rich information content generated by libraries, archives, and museums, it should become possible to build a global Semantic Web of digital cultural content and integrated search tools to help users find the content they are seeking.

> ## Libraries and the Web
>
> The web has dramatically changed the global information landscape—a fact that has had a particularly significant impact on libraries, which were the traditional gateways to information for two millennia. Whereas previous generations of researchers relied almost entirely on libraries for their information-seeking needs, members of the current generation of advanced researchers, students, and the general public are much more likely to start (and often end) their research at a web search engine like Google, Bing, or Yahoo.
>
> Faced with this reality, libraries and related service organizations have worked hard to bring information from their online public access catalogs (OPACs)—resources traditionally hidden in the deep web, beyond the reach of search engines’ web crawlers—out onto the visible web. The Online Computer Library Center (OCLC),[^42] the largest library cooperative and service provider in the world, has made its vast union catalog, WorldCat,[^43] available free of charge on the web; individual WorldCat records are retrievable from commercial search engines so that users are not obliged to start their searches from the WorldCat search page, the existence of which many users may not be aware.[^44]
>
> One of the most striking examples of collaboration between libraries and a commercial search engine company is the Google Books project.[^45] This is a service provided by the search engine giant that enables users to search the full text of books that Google has scanned, converted to machine-readable text using [optical character recognition](http://en.wikipedia.org/wiki/Optical_character_recognition), and stored in a digital data­-base. The books are provided by publishers and authors who choose to participate in the Google Books Partner Program[^46] and by Google’s library partners, through the Google Books Library Project.[^47]
>
> By purportedly making available the full text of millions of printed volumes, Google Books offers users the possibility to search not just the metadata or bibliographic records for items in libraries and elsewhere but also every word in the books themselves. The reality is that, depending upon a book’s copyright status, only excerpts of it may be available for searching and viewing. For books that are in the public domain, Google provides a brief bibliographic record, links to places where it can be purchased on line, in print form, and as an ebook (if available), and the full text of the book itself (but not in downloadable form). The Google Books “Find in a library” link takes users to the ­relevant record in WorldCat, where he or she will find bibliographic records with an indication of which libraries own copies of the book. While this may be useful to users who have the ability to request books via interlibrary loan, for the majority of users the ability to obtain free online access to full digitized copies of many books remains an illusion. Metadata and full-text searching hold great promise for a “democratization” of access to knowledge in written form, but we still have a long way to go before the World Wide Web is truly a “library.”
{:.sidebar}

[^1]: See [http://www.cipa.jp/std/documents/e/DC-008-2012_E.pdf](http://www.cipa.jp/std/documents/e/DC-008-2012_E.pdf).

[^2]: See [http://www.adobe.com/products/xmp/](http://www.adobe.com/products/xmp/).

[^3]: See [http://www.cidoc-crm.org/](http://www.cidoc-crm.org/).

[^4]: Olivia Madison et al., *Functional Requirements for Bibliographic Records* (Munich: K. G. Saur; International Federation of Library Associations and Institutions, 1998), [http://www .ifla.org/publications/functional-requirements-for-bibliographic-records](http://www.ifla.org/publications/functional-requirements-for-bibliographic-records). See also Arlene G. Taylor, ed., *Understanding FRBR: What It Is and How It Will Affect Our Retrieval Tools* (Westport, CT; London: Libraries Unlimited, 2007).

[^5]: Of course, these numbers increase constantly. For the latest Netcraft surveys, see [http://news.netcraft.com/](http://news.netcraft.com/).

[^6]: Ted Nelson quoted in Nick Gibbins, “The Eighth ACM International Hypertext Conference,” *Ariadne*, no. 9 (May 19, 1997), [http://www.ariadne.ac.uk/issue9/hypertext](http://www.ariadne.ac.uk/issue9/hypertext).

[^7]: See [http://vlib.org](http://vlib.org).

[^8]: See [http://www.google.com/about/company/](http://www.google.com/about/company/).

[^9]: See [http://www.google.com/trends/](http://www.google.com/trends/).

[^10]: See David Austin, “How Google Finds Your Needle in the Web’s Haystack,” ­American Mathematical Society website, [http://www.ams.org/samplings/feature-column/fcarc-pagerank](http://www.ams.org/samplings/feature-column/fcarc-pagerank).

[^11]: Performance—or lack thereof—is almost certainly the chief reason for the lack of success up to now of true metasearching. Because that type of search is done “live” on a number of databases and using a variety of protocols, it can be excruciatingly slow.

[^12]: See Luiz André Barroso, Jeffery Dean, and Urs Hölzle, “Web Search for a Planet: The Google Cluster Architecture,” *IEEE Micro* 23, no. 2 (April 2003), [http://static.google usercontent.com/media/research.google.com/en/us/archive/googlecluster-ieee.pdf](http://static.googleusercontent.com/media/research.google.com/en/us/archive/googlecluster-ieee.pdf).

[^13]: Steve Lawrence and C. Lee Giles, “Accessibility of Information on the Web,” *Nature* 400 (July 9, 1999): 107–09.

[^14]: Luiz André Barroso, “The Price of Performance: An Economic Case for Chip Multiprocessing,” *ACM Queue* 3, no. 7 (October 18, 2005), [http://queue.acm.org/detail.cfm?id=1095420](http://queue.acm.org/detail.cfm?id=1095420).

[^15]: See [http://dublincore.org/documents/dces/](http://dublincore.org/documents/dces/).

[^16]: See [http://www.niso.org/apps/group_public/download.php/6577/z39-85-2001_dublin_core.pdf](http://www.niso.org/apps/group_public/download.php/6577/z39-85-2001_dublin_core.pdf).

[^17]: See [http://www.iso.org/iso/home/store/catalogue_ics/catalogue_detail_ics.htm?csnumber=52142](http://www.iso.org/iso/home/store/catalogue_ics/catalogue_detail_ics.htm?csnumber=52142).

[^18]: See [http://www.dublincore.org/projects/](http://www.dublincore.org/projects/).

[^19]: See [http://www.w3.org/RDF/](http://www.w3.org/RDF/).

[^20]: See [http://www.w3.org/XML/](http://www.w3.org/XML/).

[^21]: Note that an RDF “vocabulary” is not the same as a “controlled vocabulary”; see Patricia Harpring, *Introduction to Controlled Vocabularies* (Los Angeles: Getty Research Institute, 2010), [http://www.getty.edu/research/publications/electronic_publications/intro_controlled_vocab/index.html](http://www.getty.edu/research/publications/electronic_publications/intro_controlled_vocab/index.html). The 2014 revised edition is only available in print.

[^22]: See [http://www.w3.org/TR/rdf-schema/](http://www.w3.org/TR/rdf-schema/).

[^23]: See [http://www.w3.org/TR/owl2-overview/](http://www.w3.org/TR/owl2-overview/).

[^24]: See [http://www.w3.org/2013/data/](http://www.w3.org/2013/data/).

[^25]: See [http://www.w3.org/People/Berners-Lee/](http://www.w3.org/People/Berners-Lee/).

[^26]: See [http://www.w3.org/standards/semanticweb/data](http://www.w3.org/standards/semanticweb/data).

[^27]: See [http://wiki.dbpedia.org/Datasets](http://wiki.dbpedia.org/Datasets) for details.

[^28]: See [http://www.getty.edu/research/tools/vocabularies/lod/](http://www.getty.edu/research/tools/vocabularies/lod/).

[^29]: See [http://www.openarchives.org/pmh/](http://www.openarchives.org/pmh/).

[^30]: Cory Doctorow, “Metacrap: Putting the torch to seven straw-men of the meta-utopia,” [http://www.well.com/~doctorow/metacrap.htm](http://www.well.com/~doctorow/metacrap.htm).

[^31]: Doctorow confusingly uses *schema* to refer to classification schemes (i.e., ways of describing content with words) rather than the more common meaning of a metadata structure as used in this publication. See “A Typology of Data Standards” in chapter 1, p. 3.

[^32]: See [https://www.librarything.com/](https://www.librarything.com/). See also *What Makes LibraryThing ­LibraryThing* (blog), April 3, 2013, [http://blog.librarything.com/main/2013/04/what-makes-librarything-librarything/](http:blog.librarything.com/main/2013/04/what-makes-librarything-librarything/).

[^33]: See [https://www.flickr.com/](https://www.flickr.com/).

[^34]: See [https://www.librarything.com/forlibraries](https://www.librarything.com/forlibraries).

[^35]: See [https://www.flickr.com/photos/8623220@N02/](https://www.flickr.com/photos/8623220@N02/) .

[^36]: See [http://www.loc.gov/marc/](http://www.loc.gov/marc/).

[^37]: See [http://dublincore.org/documents/dces/](http://dublincore.org/documents/dces/).

[^38]: See [http://www.loc.gov/standards/mods/](http://www.loc.gov/standards/mods/).

[^39]: See [http://www.loc.gov/ead/](http://www.loc.gov/ead/).

[^40]: See [http://www.loc.gov/standards/vracore/](http://www.loc.gov/standards/vracore/).

[^41]: See [http://network.icom.museum/cidoc/working-groups/data-harvesting-and-interchange/what-is-lido/](http:network.icom.museum/cidoc/working-groups/data-harvesting-and-interchange/what-is-lido/).

[^42]: See [http://www.oclc.org/](http://www.oclc.org/).

[^43]: See [http://www.worldcat.org/](http://www.worldcat.org/).

[^44]: However, unless the keyword “WorldCat” is included in the Google search, the record in WorldCat may not appear on the first page of search results.

[^45]: See [http://books.google.com/](http:books.google.com/).

[^46]: See [http://www.google.com/googlebooks/partners/](http://www.google.com/googlebooks/partners/).

[^47]: See [http://www.google.com/googlebooks/library/](http://www.google.com/googlebooks/library/).
