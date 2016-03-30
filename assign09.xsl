<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="studentList">
    <html>
      <head>
        <style>
          body {
          background-color: #3e94ec;
          }
          table {
          border: 1px black solid;
          border-collapse: collapse;
          padding: 5px;
          width: 100%;
          font-size: 16px;
          max-width: 900px;
          margin: auto;
          }
          td, th {
          padding: 5px;
          }
          tr th{
          background: black;
          color: white;
          }
          tr:nth-child(odd) td{
            background: #b3ffff;
          }
          tr:nth-child(even) td{
            background: #f2f2f2;
          }
          td {
          border: 1px #bfbfbf solid;
          }
          td:last-child {
          border-right: 0px;
          }
          td:first-child {
          border-left: 0px;
          }
          tr:last-child td{
          border-bottom: 0px;
          }
          tr:hover td{
          background: #0086b3;
          color: white;
          }
          .center-content {
          text-align: center;
          margin: auto;
          }
        </style>
      </head>
      <body>
        <div class="center-content">
        <h1>Students</h1>
        <table>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>State</th>
            <th>College</th>
            <th>Department</th>
            <th>Major</th>
          </tr>
          <xsl:apply-templates/>
        </table>
      </div>
      </body>
    </html>
  </xsl:template>
  <xsl:template match="student">
    <tr>
      <xsl:apply-templates/>
    </tr>
  </xsl:template>
  <xsl:template match="name">
    <td><xsl:value-of select="first"/></td>
    <td><xsl:value-of select="middle"/></td>
    <td><xsl:value-of select="last"/></td>
  </xsl:template>
  <xsl:template match="location">
    <td><xsl:value-of select="city"/></td>
    <td><xsl:value-of select="state"/></td>
  </xsl:template>
  <xsl:template match="college">
    <td><xsl:value-of select="@name"/></td>
    <xsl:apply-templates/>
  </xsl:template>
  <xsl:template match="department">
    <td><xsl:value-of select="@name"/></td>
    <td><xsl:value-of select="major"/></td>
  </xsl:template>
</xsl:stylesheet>
