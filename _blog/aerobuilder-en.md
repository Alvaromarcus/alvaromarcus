---
layout: default
title: "AeroBuilder (EN)"
lang: en
ref: aerobuilder
description: "An analysis of how AeroBuilder software modernizes aeromodeling, applying Industry 4.0 concepts to the hobby."
image: /assets/images/aerobuilder-tela-geral.png
---

[Português]({{ site.baseurl }}/blog/aerobuilder) | **English** | [Back to Home]({{ site.baseurl }}/)

# AeroBuilder: how modern software can transform an analog hobby

Aeromodeling is one of the oldest hobbies in aviation. For decades, enthusiasts designed their miniature aircraft using rulers, graph paper, and printed tables of aerodynamic coefficients. The process was slow, prone to errors, and required a considerable amount of empirical knowledge accumulated through years of trial and error. AeroBuilder was born from the dissatisfaction with this reality and the conviction that quality engineering tools should not be exclusive to the aeronautical industry.

## What is AeroBuilder

AeroBuilder is an interactive web application dedicated to the design of aeromodeling airplanes. The user inputs the dimensions of the model they intend to build, such as wingspan, wing chords, fuselage length, and tail surface size, and the tool calculates in real-time the fundamental aerodynamic parameters: the Mean Aerodynamic Chord (MAC), the theoretical Center of Gravity position, the Neutral Point, and the Static Margin. Based on these data, the system issues alerts about possible flight instabilities and suggests corrections to the designer. In the end, the user can export a 1:1 scale template in PDF, ready to be printed, cut out, and glued directly onto the Depron or balsa sheet.

![AeroBuilder main screen showing parameters, technical views, and flight assistant]({{ site.baseurl }}/assets/images/aerobuilder-tela-geral.png)

The project supports two types of aircraft: the conventional one with fuselage and tail assembly, and the flying wing with elevons. It offers visualization in both a two-dimensional technical drawing with top, side, and front views, as well as an interactive three-dimensional model with real wing airfoils such as the Clark-Y, NACA 4412, NACA 0012, and MH45.

## Industry 4.0 inside a garage

Industry 4.0 is often associated with factory floors full of robots and integrated manufacturing systems. However, its fundamental principles - the digitalization of physical processes, virtual simulation before actual execution, democratized access to engineering tools, and data-driven decision making - apply with equal relevance to the maker universe and aeromodeling.

AeroBuilder materializes these concepts on an individual scale. The traditional process of building an airplane, flying it, realizing the CG is wrong, modifying the structure, and trying again is exactly the production cycle that digitalization seeks to shorten. The tool creates a simplified digital twin of the model before the first cut is even made. The builder validates longitudinal stability, verifies the proportion between surface areas, and identifies geometric inconsistencies in the virtual environment, not on the runway.

The integrated flight assistant system, which analyzes the Static Margin and the tail volume coefficient to classify the project as stable, on alert, or unstable, works like a basic expert system, a central concept in industrial computing applied to decision support. The automated generation of 1:1 scale templates with tiling marks for printing on multiple A4 sheets is an accessible version of what industrial CAD/CAM systems do when preparing files for CNC or laser cutting.

Democratization is perhaps the point most aligned with the Industry 4.0 philosophy. Software like XFLR5 or OpenVSP exists and is technically superior, but demands a high learning curve and local installation. AeroBuilder runs entirely in the browser, without installation, without an account, and without an entry barrier. The same type of calculation that an aerospace engineer would do in a specialized spreadsheet is available to a high school student who wants to build their first foam model.

## The technology stack

The choice of development tools follows a coherent line with the goal of keeping the project lightweight, performant, and easy to maintain.

The base framework is React with TypeScript, initialized via Vite, which has replaced Create React App as the industry standard due to its fast compilation speed and native support for ES modules. TypeScript, far from being just a stylistic preference, plays a functional role here: the types of aircraft dimensions and calculated metrics are explicit contracts verified by the compiler, preventing logic errors that could result in a physically incoherent model.

Styling uses Tailwind CSS version 3, with full dark mode support via a class. The decision to use Tailwind instead of a component system like Material UI was deliberate: the tool needed a functional and responsive interface without the visual overhead of a corporate design system.

Two-dimensional visualization is handled natively by the browser's Canvas API, without third-party libraries. This means full control over every rendered pixel, which is essential for technical drawings where proportion accuracy matters. The canvas is redrawn upon every parameter change, creating the illusion of instant reactivity. Three-dimensional visualization uses React Three Fiber, a declarative wrapper for Three.js that allows describing 3D scenes with the same syntax as React components, and the Drei library, which provides orbit controls, HDR lighting environments, and geometry utilities.

Wing airfoils are generated mathematically. The code implements the analytical equation for four-digit NACA families, calculating the camber line, thickness, and upper and lower surface coordinates with cosine spacing for better resolution at the leading and trailing edges. For the Clark-Y and MH45, the tabulated reference points are interpolated by a cubic spline before being passed to Three.js's ExtrudeGeometry. This ensures that the displayed 3D model is not a generic approximation, but an extrusion of the real airfoil used in aeromodeling.

![3D model of a flying wing generated by AeroBuilder with real airfoil profile]({{ site.baseurl }}/assets/images/aerobuilder-3d-asa-voadora.png)

PDF export uses the jsPDF library directly on the client, without sending data to any server. The template pages are generated with tiling logic that calculates how many A4 sheets are needed to accommodate the model's actual dimensions and inserts alignment markers at each corner to facilitate the assembly of the sheets.

Internationalization is managed by react-i18next, with full support for English and Brazilian Portuguese. The language swap is instantaneous and persists the current dimensions, which means a Brazilian builder can work in centimeters with an interface in Portuguese without any friction.

## How AeroBuilder helps in the hobby

For those starting in scratch build aeromodeling - building from raw materials like Depron, balsa, or Coroplast - the main barrier is not a lack of manual skill. It is the lack of confidence in the design before investing hours of work into a structure that might turn out to be unstable on its first flight.

The tool solves this problem by giving the builder an objective answer still in the design phase. If the Static Margin is at 12%, the model has a good probability of being stable and controllable. If it's at 2%, the airplane will pitch up and not respond to the elevator as expected. This information, which previously required either accumulated experience or access to technical literature in English, is now just a data entry away.

The warning system with correction suggestions - the "how to fix" field that appears in each alert - transforms the tool into something close to a technical mentor. Instead of merely signaling that the tail moment arm is too short, the tool explains that every 5 centimeters added to the moment arm significantly improves stability, and that the ideal target is between 2.5 and 3.5 times the MAC value.

For experienced builders, the value lies in iteration speed. Testing design variations, altering the wingspan, comparing different stabilizer proportions, or verifying the impact of increasing the sweep on a flying wing, are operations that take seconds in the tool and hours on the workbench.

The 1:1 scale template closes the loop between digital and physical. The design validated in the software transforms directly into a physical template, eliminating the manual step of transposing measurements to the material. It is a compact version of the CAD-to-manufacturing workflow that aerospace industries adopted decades ago.

## Final considerations

AeroBuilder was built with the conviction that well-designed engineering tools have the power to accelerate learning and reduce waste at any scale, from the factory to the garage. Aeromodeling is a field rich in applied physics, constructive creativity, and a community that values shared knowledge. An open tool, running in the browser at no cost and without barriers, is a concrete way to contribute to this ecosystem.

The code is publicly available and the project is in active development. Contributions, suggestions, and usage reports are welcome.
