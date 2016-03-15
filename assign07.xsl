<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns="http://www.w3.org/1999/xhtml">
  <xsl:template match = "bsa">
    <html>
      <head>
        <title>Style sheet for BSA</title>
        <style>
          h1 {
          margin: 0;
          padding: 0;
          font-family: Arial;
          font-size: 8em;
          text-align: center;
          vertical-align: middle;
          }
          tr:nth-child(odd) {
          background-color: #e6f9ff;
          }
          table {
          width: 90%;
          margin: 10px auto;
          }
          tr th {
          background-color: lightyellow;
          }
          table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
          }
          td {
          padding: 5px;
          text-align: left;
          }
          th {
          padding: 5px;
          text-align: center;
          }
          .center {
          text-align:center;
          }
        </style>
      </head>
      <body>
        <div style="text-align:center; width:100%;">
          <div style="width: 30em; height: 150px; display: inline-block">
            <div style="position: absolute; width:35em;">
              <img src="img/bsa.png" alt="BSA logo"
                style="height: 150px; float: right;"/>
              </div>
              <h1>BSA</h1>
            </div>
            <table width="80%">
              <tr>
                <th>Council</th>
                <th>Troop <![CDATA[&]]> Unit#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Ranks <![CDATA[&]]> Date Earned</th>
                <th>Meritbadges <![CDATA[&]]> Date Earned</th>
              </tr>
              <xsl:for-each select="/bsa/council/troop/scout">
                <xsl:sort select="lastname"/>
                <tr>
                  <td><xsl:value-of select="../../@name"/></td>
                  <td class="center"><xsl:value-of select="../@unit-name"/>
                  <br/>#<xsl:value-of select="../@troop-number"/></td>
                  <td><xsl:value-of select="firstname"/></td>
                  <td><xsl:value-of select="lastname"/></td>
                  <td><xsl:value-of select="phone"/></td>
                  <td class="center">
                    <xsl:value-of select="address/street"/><br/>
                    <xsl:value-of select="address/city"/><br/>
                    <xsl:value-of select="address/state"/><br/>
                  </td>
                  <td class="center">
                    <xsl:for-each select="rank">
                      <xsl:value-of select="."/> <![CDATA[@]]>
                      <xsl:value-of select="@date-earned"/><br/>
                    </xsl:for-each>
                  </td>
                  <td class="center">
                    <xsl:for-each select="meritbadge">
                      <xsl:value-of select="."/> <![CDATA[@]]>
                      <xsl:value-of select="@date-earned"/><br/>
                    </xsl:for-each>
                  </td>
                </tr>
              </xsl:for-each>
            </table>
          </div>
        </body>
      </html>
    </xsl:template>
  </xsl:stylesheet>
