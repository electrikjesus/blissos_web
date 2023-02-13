---
title: "Licensing"
date: 2021-12-18T11:10:36+08:00
draft: false
language: en
description: Bliss OS brings the best of what Android has to offer to your projects.
---

## Licensing

Bliss OS is available under different licensing options designed to accommodate the needs of our various users:


- Bliss OS licensed under **commercial** licenses is appropriate for development of proprietary/commercial software where you do not want to share any source code with third parties or otherwise cannot comply with the terms of the GNU GPL version 3.
- Bliss OS licensed under the **GNU General Public License (GPL) version 3** is appropriate for the development of Bliss OS applications provided you can comply with the terms and conditions of the GNU GPL version 3.

Bliss OS also contains third-party code that is licensed under specific open-source licenses from the original authors (See **Third-Party Code in Bliss OS** below).

**Note**: For open-source licensed Bliss OS, some specific parts ([Bass OS](https://bliss-bass.blisscolabs.dev/) addons) are available under the GNU General Public License (GPL). For commercial licensees, all [Bass OS](https://bliss-bass.blisscolabs.dev/) addons are available under commercial Bliss OS licenses.

***Bliss OS documentation*** is available under commercial licenses from Navotpala Tech (Bliss Co-Labs), and under the terms of the GNU Free Documentation License (FDL) version 1.3, as published by the Free Software Foundation.

Educational licenses are available for students and educators in qualified educational institutions or universities.

## Purchasing and Sales Information

To purchase a Bliss OS license, [contact us](mailto:social@blissos.org?subject=Bliss%20OS%20License%20Pricing) with your request.

For further information and assistance about Bliss OS licensing, contact us or see our website for further details.

## Third-Party Code in Bliss OS

Bliss OS inherits the same Apache v2 licensing that AOSP uses for most of the components, while many of the other components like Android-Generic Project use GPL-2.0 license.
For product use, we do not include proprietary components like Google Apps, Native-Bridge, and widevine. Some features and toolkits like our [rebranding toolkit](https://bliss-bass.blisscolabs.dev/#toolkit) would require additional licensing to be obtained by the customer.

[AOSP Licenses](https://source.android.com/docs/setup/about/licenses) - [Bliss OS License](https://github.com/BlissRoms-x86/manifest/blob/arcadia-x86/License) - [Bliss ROM License](https://github.com/BlissRoms/platform_manifest/blob/typhoon/LICENSE) - [Android-Generic Project License](https://github.com/android-generic/vendor_ag/blob/unified/LICENSE.md) - [Boringdroid License](https://github.com/boringdroid/boringdroid/blob/master/LICENSE)

For Bliss OS/[Bass OS](https://bliss-bass.blisscolabs.dev/) source, we do catalog all the repos used and their licenses. You can view that [here](https://github.com/BlissRoms-x86/oss-licenses).

# FAQ

## Q: Is Bliss OS suitable for individuals?

A: Yes, Bliss OS public releases are designed to be used as a daily replacement for Windows, ChromeOS, Mac OS or Linux and work is consistently being done to improve the User Experience.

We offer users multiple types of builds to help fit their needs:
- Gapps Builds: Comes with Google Play Store, Widevine and ARM compatibility layer options
- FOSS Builds: Comes with open-source alternatives for Google Play Store and media alternatives. 
- Vanilla Builds: Comes with no added apps and services. Basic media support. 

## Q: Does Bliss OS include proprietary software?

A: Yes.
Our GMS/Gapps releases include proprietary software, and are intended for individuals only,
while our FOSS and Vanilla builds might include some proprietary parts as well. 

Proprietary redistributables in all Bliss OS public builds: 
- linux-firmware blobs 
- Proprietary linux drivers (broadcom-wl for example) 
- some media codecs (for decoding H.264/HEVC) 
- ARM Translation Library (Houdini or libndk-translation) 
- Widevine L3 

Extra proprietary redistributables in BlissOS Gapps builds include Google Play Serivces & Google Play Store.

## Q: Is Bliss OS suitable for companies?

A: Yes, but not all builds.
We produce minimal vanilla and FOSS Bliss OS,
and [Bass OS](https://bliss-bass.blisscolabs.dev/) (bare-bones with added configurability options),
and AOSP builds with basic x86/x86_64 PC hardware support.
Both the AOSP and [Bass OS](https://bliss-bass.blisscolabs.dev/) builds come with no proprietary software included, and those are available to test with.
While those builds are very basic, they do include much of what would be needed to base a product off of.
If your product requires no additional changes on top of what is released to the public,
then you are free to use it at no cost.
If your product requires Google Apps, ARM/ARM64 Native-Bridge, or Widevine, due to licensing restrictions,
we suggest that you [reach out](mailto:social@blissos.org?subject=Development%20Contract%20Inquiry), and we can help you look into alternative options using open-source solutions.

You can find our production ready test builds:
[Bass OS test builds](https://bliss-bass.blisscolabs.dev/)

## Q: Can my company use Bliss OS with Gapps as-is?

A: No.
The Bliss OS versions that include Google Play Store, native-bridge,
or widevine are not fit for commercial use
and are not meant
to be included in products
as they contain proprietary features and services that typically require per-product licensing through Google,
Intel, or others.
We do, however, release public Vanilla and FOSS (bare-bones)
builds that are suitable for company use and do not contain any proprietary resources.

Most of those proprietary licenses are not eligible for use in generic operating-system setups.
Some require the device to pass certification programs that are only meant for single device certifications.
If you have a product, 
and you would like to explore what the CTS certification process includes, please feel free to [contact us](mailto:social@blissos.org?subject=Development%20Contract%20Inquiry)

## Q: Can my company use Bliss OS source-code in a product?

A: Yes.
This applies to Android-PC (AOSP), Bliss OS, Bliss OS Go or Bliss sources.
If you are an individual developer, a startup, or represent some other business enterprise, and you are interested in using our sources, the open-source licenses we maintain allow you to use the source at no cost as long as you use it: A) as-is, B) you contribute any changes made back to the source, or C) produce the full source to the public independently.
If you would like to use our source and make changes to it that you do not plan on releasing as open-source,
we request you to contact us to work out a per-device licensing agreement and/or set up a [development contract](mailto:social@blissos.org?subject=Development%20Contract%20Inquiry) for branding,
optimizations and specific needs.

## Q: Does my company have to release any changes made to the collective source code of Bliss OS?

A: This all depends on where the changes in the source were made,
as many repos in the project retain different OSS Licenses, there are different requirements per repo.
If you are unsure if your company needs to release the source for any of the changes made,
please feel free to contact us.

Another thing to pay attention to is if the tools being used require the end product or alterations to be released.
Some Apache 2.0 licensed projects allow for that requirement to be made.
Some versions of Android-Generic Project also have similar licensing requirements.
We have put together a toolkit to help identify these types of licenses within the source.
You can find that [here](https://github.com/android-generic/agpm-auto-oss-license-documentation).

--- 

# Licensing Questions?

**We try to offer a wide variety of licensing options that cater to organizations of all sizes.**

If you are not sure if you need a license,
or just have some questions on our licensing options,
please feel free to [contact us](mailto:social@blissos.org?subject=Licensing%20Inquiry).
We love helping out others find the best way to contribute back to the source.