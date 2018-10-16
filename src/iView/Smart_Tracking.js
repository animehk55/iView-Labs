import React, { Component } from 'react';

class Smart_Tracking extends Component {
  render() {
    return (
      <div className="PageContent">
      <h1> Smart Tracking </h1>
      Aspose development team is happy to announce the monthly release of Aspose.Words for Java &.NET 14.6.0.  
      This month’s release containing over 115 useful new features, enhancements and bug fixes to the Aspose.Words
      products. The InsertHtml method of the DocumentBuilder class now allows developers to choose what formatting 
      will be used for inserted HTML fragments. A new overloaded version of InsertHtml has been added, whose argument
      useBuilderFormatting controls this behavior. When useBuilderFormatting is false, which is the default, any 
      formatting specified in DocumentBuilder is ignored, and the formatting of the inserted text is based on default 
      HTML formatting. In this case, the inserted text looks as in browsers. When useBuilderFormatting is true, the 
      formatting of the inserted text is based on the formatting specified in DocumentBuilder. Note that
      useBuilderFormatting chooses only the base formatting of the inserted text, and does not affect any formatting .
      directly specified in the HTML fragment. New public methods were added to start and stop automatic revision 
      tracking. Currently formatting changes are not tracked. There are few limitation in the current implementation. 
      Previously, we always returned the NameAscii attribute value for the public Run.Font.Name property getter. Now, 
      the behavior is slightly changed. If the source run is of the FarEast character category then Run.Font.Name
      returns the NameFarEast attribute value like Microsoft Word does. Previously, the font substitution mechanism 
      (the fonts to be used when a specified font is missing from the system) was hard coded into Aspose.Words’ code 
      base and there was no way in the public API to manually customize it. Now, three new public static methods have
       been added to the FontSettings class. Previously, there was an option (ExportCustomPropertiesAsMetadata) to 
       control how document’s custom properties were exported to PDF document. Now, this property is obsolete, 
       instead a new property is added.  It provides new functionality – export custom properties of document to PDF
      as entries in /Info dictionary.  Footnote and endnote references PDF rendering is now controlled by 
      PdfSaveOptions.CreateNoteHyperlinks property. If it is set to true then footnote and endnote references in
      the main text story are rendered into active hyperlinks. When clicked, the hyperlink will lead to the 
      corresponding footnote or endnote. The default value is false.
      </div>
    );
  }
}

export default Smart_Tracking;