import { jsPDF } from 'jspdf';
import { 
  PERSONAL_INFO, 
  CAREER_OBJECTIVE, 
  EDUCATION_DATA, 
  INTERNSHIPS, 
  FEATURED_PROJECTS, 
  SKILL_CATEGORIES, 
  ACHIEVEMENTS 
} from '../data/aerospaceData.ts';

export const generateResumePdf = () => {
  const doc = new jsPDF({
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageBreak = (requiredHeight: number) => {
    if (y + requiredHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      drawHeaderAccent();
    }
  };

  const drawHeaderAccent = () => {
    // Subtle top border stripe
    doc.setFillColor(245, 158, 11); // Amber-500
    doc.rect(0, 0, pageWidth, 2.5, 'F');
  };

  // Initial top accent
  drawHeaderAccent();

  // --- HEADER SECTION ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(17, 24, 39); // Gray 900
  doc.text(PERSONAL_INFO.name.toUpperCase(), margin, y + 6);
  y += 11;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(180, 83, 9); // Amber-700
  doc.text(
    'AEROSPACE ENGINEERING UNDERGRADUATE  |  UAV SPECIALIZATION', 
    margin, 
    y
  );
  y += 5.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(75, 85, 99); // Gray 600
  const contactText = `Email: ${PERSONAL_INFO.email}   |   Phone: ${PERSONAL_INFO.phone}   |   Location: ${PERSONAL_INFO.location}`;
  doc.text(contactText, margin, y);
  y += 5;

  // Header Divider
  doc.setDrawColor(209, 213, 219); // Gray 300
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 5;

  // Helper for Section Headings
  const renderSectionHeading = (title: string) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42); // Slate 900
    doc.text(title.toUpperCase(), margin, y);

    // Accent line under heading
    doc.setDrawColor(245, 158, 11); // Amber
    doc.setLineWidth(0.7);
    doc.line(margin, y + 1.5, margin + 45, y + 1.5);
    
    // Light gray line extending across
    doc.setDrawColor(229, 231, 235);
    doc.setLineWidth(0.3);
    doc.line(margin + 46, y + 1.5, pageWidth - margin, y + 1.5);

    y += 5.5;
  };

  // --- CAREER OBJECTIVE ---
  renderSectionHeading('Career Objective');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(55, 65, 81);
  const objectiveLines = doc.splitTextToSize(CAREER_OBJECTIVE, contentWidth);
  doc.text(objectiveLines, margin, y);
  y += objectiveLines.length * 3.8 + 3;

  // --- EDUCATION ---
  renderSectionHeading('Education');
  EDUCATION_DATA.forEach((edu) => {
    checkPageBreak(13);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(17, 24, 39);
    doc.text(edu.degree, margin, y);

    // Period on right
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 83, 9);
    doc.text(edu.period, pageWidth - margin, y, { align: 'right' });
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(75, 85, 99);
    doc.text(`${edu.institution}, ${edu.location}  —  Score: ${edu.score}`, margin, y);
    y += 4;

    if (edu.description) {
      doc.setFontSize(8);
      doc.setTextColor(107, 114, 128);
      const descLines = doc.splitTextToSize(edu.description, contentWidth);
      doc.text(descLines, margin, y);
      y += descLines.length * 3.5;
    }
    y += 2;
  });

  // --- ACHIEVEMENTS & COMPETITIONS ---
  renderSectionHeading('Achievements & Competitions');
  ACHIEVEMENTS.forEach((ach) => {
    checkPageBreak(12 + ach.points.length * 4);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(17, 24, 39);
    doc.text(ach.title, margin, y);

    if (ach.level) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(180, 83, 9);
      doc.text(ach.badgeText || ach.level, pageWidth - margin, y, { align: 'right' });
    }
    y += 3.8;

    if (ach.organization) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7.5);
      doc.setTextColor(107, 114, 128);
      doc.text(ach.organization, margin, y);
      y += 3.4;
    }

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);
    ach.points.forEach((pt) => {
      checkPageBreak(4.5);
      doc.text('•', margin + 1, y);
      const ptLines = doc.splitTextToSize(pt, contentWidth - 5);
      doc.text(ptLines, margin + 4, y);
      y += ptLines.length * 3.4;
    });
    y += 2;
  });

  // --- INTERNSHIP EXPERIENCE ---
  renderSectionHeading('Internship & Flight Operations Experience');
  INTERNSHIPS.forEach((exp) => {
    checkPageBreak(15 + exp.highlights.length * 4);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(17, 24, 39);
    doc.text(`${exp.title}  |  ${exp.organization}`, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(180, 83, 9);
    doc.text(exp.period, pageWidth - margin, y, { align: 'right' });
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);
    const expDescLines = doc.splitTextToSize(exp.description, contentWidth);
    doc.text(expDescLines, margin, y);
    y += expDescLines.length * 3.5 + 1;

    exp.highlights.forEach((hl) => {
      checkPageBreak(4.5);
      doc.text('•', margin + 1, y);
      const hlLines = doc.splitTextToSize(hl, contentWidth - 5);
      doc.text(hlLines, margin + 4, y);
      y += hlLines.length * 3.4;
    });

    // Tech pills
    y += 1;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(107, 114, 128);
    doc.text(`Core competencies: ${exp.skills.join(', ')}`, margin + 4, y);
    y += 4.5;
  });

  // --- SELECTED AEROSPACE & AI PROJECTS ---
  renderSectionHeading('Key Aerospace, UAV, AI & IoT Projects');
  FEATURED_PROJECTS.slice(0, 4).forEach((proj) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(17, 24, 39);
    doc.text(proj.title, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(180, 83, 9);
    doc.text(proj.categoryLabel, pageWidth - margin, y, { align: 'right' });
    y += 3.6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(55, 65, 81);
    const projDesc = doc.splitTextToSize(proj.summary, contentWidth);
    doc.text(projDesc, margin, y);
    y += projDesc.length * 3.4;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(107, 114, 128);
    doc.text(`Tech: ${proj.technologies.slice(0, 6).join(', ')}`, margin, y);
    y += 4.5;
  });

  // --- TECHNICAL SKILLS ---
  renderSectionHeading('Technical Skills');
  SKILL_CATEGORIES.forEach((cat) => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(17, 24, 39);
    doc.text(`${cat.title}:`, margin, y);

    const skillsString = cat.skills.map((s) => s.name).join('  •  ');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(75, 85, 99);
    const skillLines = doc.splitTextToSize(skillsString, contentWidth - 45);
    doc.text(skillLines, margin + 40, y);
    y += Math.max(skillLines.length * 3.5, 4.5);
  });

  // Footer page numbers
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(156, 163, 175);
    doc.text(
      `Madhankumar A — Curriculum Vitae | Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 6,
      { align: 'center' }
    );
  }

  // Trigger browser download
  doc.save('Madhankumar_Internship_Resume.pdf');
};

export const downloadResumePdf = () => {
  try {
    const link = document.createElement('a');
    link.href = '/Madhankumar_Internship_Resume.pdf';
    link.download = 'Madhankumar_Internship_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch {
    generateResumePdf();
  }
};

