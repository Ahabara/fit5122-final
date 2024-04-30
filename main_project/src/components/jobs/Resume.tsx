import Experience from "./components/Experience.tsx";
import React from "react";

interface ResumeProps {
  name?: string;
  description?: string;
}

interface Address {
  street: string;
  suburb: string;
  postcode: string;
}

interface Experience {
  company: string;
  city: string;
  jobTitle: string;
  jobDescription: string;
}

interface Education {
  schoolName: string;
  location: string;
  degree: string;
  educationDescription?: string;
}

interface Awards {
  award: string;
  awardDescription: string;
}
interface Resume {
  name: string;
  description: string;
  address: Address;
  mobile: string;
  email: string;
  experience?: Experience[];
  education?: Education[];
  skills?: string[];
  awards?: Awards[];
  languages: string[];
}

// todo refractor so unstyled data is passed
const Resume: React.FC<ResumeProps> = ({ name, description }) => {
  return (
    <div className="w-a4w h-a4h bg-white p-4 shadow-md">
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '@import url(https://themes.googleusercontent.com/fonts/css?kit=RFda8w1V0eDZheqfcyQ4EGb3DKsRMD34dqg1gT8Z-p6isjtAVhoKeKPV_uAAgBOSk3k702ZOKiLJc3WVjuplzPesZW2xOQ-xsNqO47m55DA);.lst-kix_d52h1clnbs3c-5>li:before{content:"\\0025a0   "}.lst-kix_d52h1clnbs3c-3>li:before{content:"\\0025cf   "}.lst-kix_d52h1clnbs3c-2>li:before{content:"\\0025a0   "}.lst-kix_d52h1clnbs3c-6>li:before{content:"\\0025cf   "}.lst-kix_d52h1clnbs3c-1>li:before{content:"\\0025cb   "}.lst-kix_d52h1clnbs3c-7>li:before{content:"\\0025cb   "}.lst-kix_d52h1clnbs3c-0>li:before{content:"\\00200b   "}.lst-kix_d52h1clnbs3c-8>li:before{content:"\\0025a0   "}.lst-kix_3expns8knkd9-0>li:before{content:"\\00200b   "}.lst-kix_3expns8knkd9-1>li:before{content:"\\0025cb   "}ul.lst-kix_d52h1clnbs3c-5{list-style-type:none}ul.lst-kix_d52h1clnbs3c-6{list-style-type:none}.lst-kix_3expns8knkd9-3>li:before{content:"\\0025cf   "}ul.lst-kix_d52h1clnbs3c-7{list-style-type:none}ul.lst-kix_d52h1clnbs3c-8{list-style-type:none}.lst-kix_3expns8knkd9-2>li:before{content:"\\0025a0   "}.lst-kix_d52h1clnbs3c-4>li:before{content:"\\0025cb   "}.lst-kix_3expns8knkd9-8>li:before{content:"\\0025a0   "}.lst-kix_3expns8knkd9-7>li:before{content:"\\0025cb   "}ul.lst-kix_d52h1clnbs3c-0{list-style-type:none}ul.lst-kix_d52h1clnbs3c-1{list-style-type:none}ul.lst-kix_d52h1clnbs3c-2{list-style-type:none}ul.lst-kix_d52h1clnbs3c-3{list-style-type:none}ul.lst-kix_d52h1clnbs3c-4{list-style-type:none}.lst-kix_3expns8knkd9-4>li:before{content:"\\0025cb   "}.lst-kix_3expns8knkd9-5>li:before{content:"\\0025a0   "}.lst-kix_3expns8knkd9-6>li:before{content:"\\0025cf   "}ul.lst-kix_3expns8knkd9-2{list-style-type:none}ul.lst-kix_3expns8knkd9-1{list-style-type:none}ul.lst-kix_3expns8knkd9-4{list-style-type:none}ul.lst-kix_3expns8knkd9-3{list-style-type:none}ul.lst-kix_3expns8knkd9-0{list-style-type:none}ul.lst-kix_3expns8knkd9-6{list-style-type:none}ul.lst-kix_3expns8knkd9-5{list-style-type:none}ul.lst-kix_3expns8knkd9-8{list-style-type:none}ul.lst-kix_3expns8knkd9-7{list-style-type:none}ol{margin:0;padding:0}table td,table th{padding:0}.c24{border-right-style:solid;padding:7.2pt 7.2pt 7.2pt 7.2pt;border-bottom-color:#ffffff;border-top-width:0pt;border-right-width:0pt;border-left-color:#ffffff;vertical-align:top;border-right-color:#ffffff;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:165pt;border-top-color:#ffffff;border-bottom-style:solid}.c14{border-right-style:solid;padding:7.2pt 7.2pt 7.2pt 7.2pt;border-bottom-color:#ffffff;border-top-width:0pt;border-right-width:0pt;border-left-color:#ffffff;vertical-align:top;border-right-color:#ffffff;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:358.5pt;border-top-color:#ffffff;border-bottom-style:solid}.c2{color:#666666;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:9pt;font-family:"Merriweather";font-style:normal}.c12{color:#000000;text-decoration:none;vertical-align:baseline;font-size:9pt;font-family:"Open Sans";font-style:normal}.c26{padding-top:6pt;padding-bottom:0pt;line-height:1.0;text-align:left;margin-right:15pt;height:9pt}.c10{color:#000000;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Merriweather";font-style:normal}.c22{color:#666666;text-decoration:none;vertical-align:baseline;font-size:6pt;font-family:"Merriweather";font-style:normal}.c28{color:#b7b7b7;text-decoration:none;vertical-align:baseline;font-size:9pt;font-family:"Open Sans";font-style:normal}.c11{color:#2079c7;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:"Open Sans";font-style:normal}.c0{padding-top:16pt;padding-bottom:0pt;line-height:1.0;page-break-after:avoid;text-align:left;margin-right:15pt}.c18{color:#2079c7;text-decoration:none;vertical-align:baseline;font-size:9pt;font-family:"Open Sans";font-style:normal}.c21{padding-top:5pt;padding-bottom:5pt;line-height:1.0;page-break-after:avoid;text-align:left;margin-right:15pt}.c8{color:#000000;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Merriweather";font-style:italic}.c5{color:#666666;text-decoration:none;vertical-align:baseline;font-size:8pt;font-family:"Open Sans";font-style:normal}.c16{padding-top:0pt;padding-bottom:0pt;line-height:1.15;text-align:left;margin-right:15pt}.c4{padding-top:16pt;padding-bottom:0pt;line-height:1.3;text-align:left;margin-right:15pt}.c29{padding-top:0pt;padding-bottom:6pt;line-height:1.0;text-align:left;margin-right:15pt}.c25{text-decoration:none;vertical-align:baseline;font-size:36pt;font-family:"Merriweather";font-style:normal}.c17{padding-top:30pt;padding-bottom:0pt;line-height:1.0;text-align:left;margin-right:15pt}.c7{padding-top:6pt;padding-bottom:0pt;line-height:1.3;text-align:left;margin-right:15pt}.c23{border-spacing:0;border-collapse:collapse;margin-right:auto}.c27{text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Merriweather"}.c15{margin-left:0pt;list-style-position:inside;text-indent:45pt}.c19{background-color:#ffffff;max-width:525.6pt;padding:28.8pt 43.2pt 43.2pt 43.2pt}.c1{padding:0;margin:0}.c31{height:588pt}.c20{height:80pt}.c13{color:#000000}.c30{height:9pt}.c6{font-weight:700}.c3{font-weight:400}.c9{font-style:italic}.title{padding-top:0pt;color:#000000;font-weight:700;font-size:36pt;padding-bottom:6pt;font-family:"Merriweather";line-height:1.0;text-align:left}.subtitle{padding-top:0pt;color:#000000;font-size:9pt;padding-bottom:0pt;font-family:"Open Sans";line-height:1.15;text-align:left}li{color:#666666;font-size:9pt;font-family:"Merriweather"}p{margin:0;color:#666666;font-size:9pt;font-family:"Merriweather"}h1{padding-top:30pt;color:#2079c7;font-weight:700;font-size:9pt;padding-bottom:0pt;font-family:"Open Sans";line-height:1.0;text-align:left}h2{padding-top:16pt;color:#000000;font-weight:700;font-size:11pt;padding-bottom:0pt;font-family:"Merriweather";line-height:1.0;page-break-after:avoid;text-align:left}h3{padding-top:5pt;color:#666666;font-size:8pt;padding-bottom:5pt;font-family:"Open Sans";line-height:1.0;page-break-after:avoid;text-align:left}h4{padding-top:8pt;-webkit-text-decoration-skip:none;color:#666666;text-decoration:underline;text-decoration-skip-ink:none;font-size:11pt;padding-bottom:0pt;font-family:"Trebuchet MS";line-height:1.3;page-break-after:avoid;text-align:left}h5{padding-top:8pt;color:#666666;font-size:11pt;padding-bottom:0pt;font-family:"Trebuchet MS";line-height:1.3;page-break-after:avoid;text-align:left}h6{padding-top:8pt;color:#666666;font-size:11pt;padding-bottom:0pt;font-family:"Trebuchet MS";line-height:1.3;page-break-after:avoid;font-style:italic;text-align:left}',
        }}
      />
      <p className="c26">
        <span className="c3 c22" />
      </p>
      <a id="t.b5e152db183d5bf10508dda6fb9beae91810a391" />
      <a id="t.0" />
      <table className="c23">
        <tbody>
          <tr className="c20">
            <td className="c14" colSpan={1} rowSpan={1}>
              <p className="c29 title" id="h.x8fm1uorkbaw">
                <span className="c13 c6 c25">{name}</span>
              </p>
              <p className="c16 subtitle" id="h.ymi089liagec">
                <span>{description}</span>
              </p>
            </td>
            <td className="c24" colSpan={1} rowSpan={1}>
              <p className="c16">
                <span className="c3 c12">123 Your Street</span>
              </p>
              <p className="c16">
                <span className="c12 c3">Your City, ST 12345</span>
              </p>
              <p className="c16">
                <span className="c12 c6">(123) 456-7890</span>
              </p>
              <p className="c16">
                <span className="c12 c6">no_reply@example.com</span>
              </p>
            </td>
          </tr>
          <tr className="c31">
            <td className="c14" colSpan={1} rowSpan={1}>
              <h1 className="c17" id="h.y7d3xdxnr44m">
                <span className="c18 c6">EXPERIENCE</span>
              </h1>
              <Experience company={"Jasmin"} location={"ButtTown"} />
              <Experience company={"Jasmin"} location={"ButtTown"} />
              <Experience company={"Jasmin"} location={"ButtTown"} />

              <h1 className="c17" id="h.yk8luflkpwij">
                <span>EDUCATION</span>
              </h1>
              <h2 className="c0" id="h.6wymnhinx9q5">
                <span>School</span>
                <span>&nbsp;Name, </span>
                <span className="c3">Location — </span>
                <span className="c8 c3">Degree</span>
              </h2>
              <h3 className="c21" id="h.7vtcyzeczjot">
                <span>MONTH 20XX - MONTH 20XX</span>
              </h3>
              <p className="c7">
                <span className="c2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore.
                </span>
              </p>
              <h2 className="c0" id="h.czfiadnsgnzp">
                <span>School Name, </span>
                <span className="c3">Location — </span>
                <span className="c8 c3">Degree</span>
              </h2>
              <h3 className="c21" id="h.miiyt1y6sl7g">
                <span>MONTH 20XX - MONTH 20XX</span>
              </h3>
              <p className="c7">
                <span className="c2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam.
                </span>
              </p>
              <h1 className="c17" id="h.jhv78pp9wtzd">
                <span>PROJECTS</span>
              </h1>
              <h2 className="c0" id="h.vm051rmyhoww">
                <span>Project Name </span>
                <span className="c3">— </span>
                <span className="c3 c9">Detail</span>
              </h2>
              <p className="c7">
                <span className="c2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </span>
              </p>
            </td>
            <td className="c24" colSpan={1} rowSpan={1}>
              <h1 className="c17" id="h.ca0awj8022e2">
                <span className="c18 c6">SKILLS</span>
              </h1>
              <ul className="c1 lst-kix_d52h1clnbs3c-0 start">
                <li className="py-1">
                  <span className="c2">Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="py-1">
                  <span className="c2">Lorem ipsum dolor sit amet.</span>
                </li>
                <li className="py-1">
                  <span className="c2">Lorem ipsum dolor sit amet.</span>
                </li>
              </ul>

              <h1 className="c17" id="h.tuxh7mwdaxox">
                <span className="c6 c18">AWARDS</span>
              </h1>
              <p className="c4">
                <span className="c6">Lorem ipsum</span>
                <span>&nbsp;</span>
                <span className="c6">dolor sit</span>
                <span className="c2">
                  &nbsp;amet Consectetuer adipiscing elit, Sed diam nonummy
                </span>
              </p>
              <p className="c7">
                <span className="c6">Nibh euismod tincidunt</span>
                <span className="c2">
                  &nbsp;ut laoreet dolore magna aliquam erat volutpat.
                </span>
              </p>
              <p className="c7">
                <span className="c6">Lorem ipsum dolor sit</span>
                <span className="c2">
                  &nbsp;amet Consectetuer adipiscing elit, Sed diam nonummy
                </span>
              </p>
              <p className="c7">
                <span className="c6">Nibh euismod tincidunt</span>
                <span className="c2">
                  &nbsp;ut laoreet dolore magna aliquam erat volutpat.
                </span>
              </p>
              <h1 className="c17" id="h.cxxkes25b26">
                <span>LANGUAGES</span>
              </h1>
              <p className="c4">
                <span className="c2">
                  Lorem ipsum, Dolor sit amet, Consectetuer
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="c7 c30">
        <span className="c2" />
      </p>
    </div>
  );
};

export default Resume;
