<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arham Salman's Portfolio</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        header {
            background-color: #BF5700;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 1.5em;
            font-weight: bold;
            width: 100%;
        }
        main {
            display: flex;
            max-width: 1400px;
            width: 100%;
            gap: 20px;
            padding: 20px;
        }
        .column {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            display: flex;
            flex-direction: column;
        }
        .left-column {
            flex: 1;
        }
        .middle-column {
            flex: 2;
        }
        .right-column {
            flex: 1;
        }
        h2 {
            color: #BF5700;
            font-size: 1.2em;
            margin-bottom: 10px;
            border-bottom: 2px solid #BF5700;
            padding-bottom: 5px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        ul li {
            margin-bottom: 10px;
        }
        a {
            color: #BF5700;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .profile img {
            width: 100%;
            max-width: 200px;
            height: auto;
            border-radius: 50%;
            margin-bottom: 15px;
        }
        .profile p {
            line-height: 1.6;
        }
        footer {
            text-align: center;
            padding: 20px;
            background-color: #BF5700;
            color: white;
            font-size: 0.9em;
            margin-top: 20px;
            width: 100%;
        }
        .icon {
            width: 28px;
            height: 28px;
            vertical-align: middle;
            margin-right: 10px;
            border-radius: 50%;
            object-fit: cover;
        }
        .icon.linkedin {
            width: 32px;
            height: 32px;
        }
    </style>
</head>
<body>
    <header>
        Arham Salman's Portfolio
    </header>

    <main>
        <div class="column left-column">
            <section class="profile">
                <img src="assets/grad.png" alt="Arham Salman">
                <p>Hello! I'm Arham Salman, a first-year Master's student in Biostatistics & Data Science at UTHealth Houston. My ambitions in Public Health aim to curtail disparities in healthcare treatment and accessibility for low-income and marginalized populations.</p>
            </section>
        </div>

        <div class="column middle-column">
            <section id="education">
                <h2>Education</h2>
                <ul>
                    <li>Master of Science in Biostatistics & Data Science - UTHealth Houston (2024-2026)</li>
                    <li>Bachelor of Science in Public Health - The University of Texas at Austin (2020-2024)</li>
                </ul>
            </section>

            <section id="experience">
                <h2>Experience</h2>
                <ul>
                    <li>Graduate Research Assistant - MD Anderson Cancer Center: Wu Lab (2025)</li>
                    <li>Graduate Research Assistant - UTHealth SA: Ma Lab (2025)</li>
                    <li>Biostatistics Research Intern - UTMB Summer Institute of Biostatistics and Data Science (2023)</li>
                    <li>Data Analyst Intern - UT SHIFT (2023)</li>
                    
                </ul>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <ul>
                    <li><a href="assets/Big Data Soccer Team Analysis Project" download>Big Data Soccer Team Analysis</a></li>
                    <li><a href="assets/nhanes.Rmd" download>Exploring the Link Between Household Income And Cardiovascular Disease</a></li>
                    <li><a href="assets/FINAL poster temp.pptx" download>Navajo Reservation Preservation Program</a></li>
                </ul>
            </section>

            <section id="links">
                <h2>Links</h2>
                <ul>
                    <li><a href="https://github.com/Arham4124" target="_blank">
                        <img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" class="icon" alt="GitHub Logo">GitHub Profile</a></li>
                    <li><a href="https://www.linkedin.com/in/arham-salman12d" target="_blank">
                        <img src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" class="icon linkedin" alt="LinkedIn Logo">LinkedIn</a></li>
                    <li><a href="https://orcid.org/0009-0004-3579-8849" target="_blank">
                        <img src="https://becker.wustl.edu/wp-content/uploads/orcid.png" class="icon" alt="ORCID Logo">0009-0004-3579-8849</a></li>
                </ul>
            </section>
        </div>

        <div class="column right-column">
            <section id="Research Interests">
                <h2>Research Interests</h2>
                <ul>
                    <li>Neuroimaging</li>
                    <li>Machine Learning</li>
                    <li>Neurodegenerative Disease Pathology</li>
                    <li>Deep Learning</li>
                    <li>Artificial Intelligence</li>
                </ul>
            </section>

            <section id="languages">
                <h2>Languages</h2>
                <ul>
                    <li>English</li>
                    <li>Urdu</li>
                </ul>
            </section>

            <section id="skills">
                <h2>Technical Skills</h2>
                <ul>
                    <li>Python</li>
                    <li>R</li>
                    <li>Stata</li>
                    <li>SAS</li>
                    <li>SQL</li>
                    <li>Microsoft Excel/Word/PowerPoint</li>
                </ul>
            </section>

            <section id="contact">
                <h2>Contact Information</h2>
                <ul>
                    <li>Email: <a href="mailto:arham.salman@uth.tmc.edu">arham.salman@uth.tmc.edu</a></li>
                    <li>Phone: 281-650-5936</li>
                    <li><a href="assets/Salman, Arham - Resume.pdf" target="_blank">View My Resume</a></li>
                </ul>
            </section>
        </div>
    </main>

    <footer>
        &copy; 2024 Arham Salman. All rights reserved.
    </footer>
</body>
</html>
